<script lang="ts">
  import { onMount } from 'svelte';
  
  let displayText = '';
  const fullText = 'Full Stack Developer & Tech Enthusiast';
  let currentIndex = 0;
  let status: 'online' | 'idle' | 'dnd' | 'offline' = 'offline';
  let socket: WebSocket | null = null;
  let heartbeatInterval: number | null = null;
  let useDefaultAvatar = false;

  const DISCORD_ID = '1235607379698127022';
  const DEFAULT_AVATAR = `data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaC0xNiB3LTE2IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03eiIgLz48L3N2Zz4=`;
  
  function getStatusColor(status: 'online' | 'idle' | 'dnd' | 'offline'): string {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'idle': return 'bg-yellow-400';
      case 'dnd': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  }

  function handleImageError() {
    useDefaultAvatar = true;
  }

  function startHeartbeat(interval: number) {
    heartbeatInterval = window.setInterval(() => {
      if (socket?.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ op: 3 }));
      }
    }, interval) as unknown as number;
  }

  function handleWebSocketMessage(event: MessageEvent) {
    const data = JSON.parse(event.data);
    
    switch (data.op) {
      case 1: // Hello
        startHeartbeat(data.d.heartbeat_interval);
        if (socket?.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({
            op: 2,
            d: {
              subscribe_to_id: DISCORD_ID
            }
          }));
        }
        break;
      
      case 0: // Events
        if (data.t === 'INIT_STATE') {
          status = data.d.discord_status;
        } else if (data.t === 'PRESENCE_UPDATE') {
          status = data.d.discord_status;
        }
        break;
    }
  }

  onMount(() => {
    // Typewriter effect
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        displayText += fullText[currentIndex];
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Lanyard WebSocket connection
    socket = new WebSocket('wss://api.lanyard.rest/socket');
    socket.onmessage = handleWebSocketMessage;
    
    return () => {
      clearInterval(interval);
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      if (socket) socket.close();
    };
  });
</script>
<div class="flex min-h-screen items-center justify-center p-4">
  <div class="w-full max-w-md rounded-xl bg-white/10 backdrop-blur-lg p-6 shadow-2xl">
    <div class="flex flex-col items-center space-y-4">
      <!-- Profile Picture with Status Ring -->
      <div class="relative">
        <div class={`absolute -inset-0.5 rounded-full ${getStatusColor(status)} opacity-75`}></div>
        <div class="relative h-32 w-32 overflow-hidden rounded-full bg-gray-800/50 border-4 border-white/10">
          <img 
            src={useDefaultAvatar ? DEFAULT_AVATAR : `https://api.lanyard.rest/${DISCORD_ID}.png`}
            alt="Profile"
            class="h-full w-full object-cover"
            on:error={handleImageError}
          />
        </div>
      </div>

      <!-- Name -->
      <h1 class="text-2xl font-bold text-white">zeld</h1>

      <!-- Typewriter Text -->
      <p class="font-mono text-sm text-gray-300">
        {displayText}<span class="animate-pulse">|</span>
      </p>

      <!-- Social Links -->
      <div class="flex space-x-4">
        <a href="https://github.com/dukefromjava" class="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href="https://discord.com/users/1235607379698127022" class="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Discord Profile">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
        <a href="https://t.me/broimdukefromjava" class="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
