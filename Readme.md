# SM64 runtime

The browser player is the real `libsm64` API compiled to WebAssembly, not a JavaScript movement approximation.

- `libsm64`: `fd11813208272b4271d92bd92feb8f3fdbe61be5`
- Mario geometry source: `n64decomp/sm64` commit `06ec56df7f951f88da05f468cdcacecba496145a` (the pinned source used by `import-mario-geo.py`)
- ROM input: `Super Mario 64 (USA).z64`
- Runtime calls: `sm64_global_init`, `sm64_audio_init`, `sm64_audio_tick`, `sm64_static_surfaces_load`, `sm64_mario_create`, `sm64_mario_tick`, `sm64_mario_interact_cap`, `sm64_set_mario_state`, `sm64_set_mario_animation`, and the persistent `sm64_set_mario_animation_override` emote helper
- The browser build exports `sm64_set_mario_animation` for native emotes. The wave animation is `MARIO_ANIM_CREDITS_WAVING` (`0x1D`) in the pinned SM64 source.

The generated files are `libsm64-runtime.js` and `libsm64-runtime.wasm`, built with a larger 256 KiB WASM stack so the original audio synthesis can safely process landing sounds. The browser export list includes the native wing-cap interaction API and the state setter used to clear special-cap flags when the toggle is turned off. The page feeds the returned Mario geometry buffers and texture atlas into Three.js, while the baseplate collision is passed into `sm64_static_surfaces_load`.

The page initializes libsm64's ROM audio and schedules its original stereo 16-bit PCM output through the browser AudioContext after the first user interaction.
