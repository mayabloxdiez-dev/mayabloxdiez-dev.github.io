# Error Info
Error name: RuntimeError
Error message: unreachable
Error stack:
```
RuntimeError: unreachable
    at ruffle_web.wasm.alloc[98d089680bbbc9df]::alloc::handle_alloc_error (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[14415]:0x9f7c36)
    at ruffle_web.wasm.alloc[98d089680bbbc9df]::raw_vec::handle_error (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[13019]:0x9d5ba0)
    at ruffle_web.wasm.<alloc[98d089680bbbc9df]::raw_vec::RawVec<<ruffle_render_wgpu[6203dc2d08ba3b97]::context3d::current_pipeline::CurrentPipeline>::rebuild_pipeline::BufferData>>::grow_one (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[9157]:0x96a36e)
    at ruffle_web.wasm.<swf[e867f3c888bb4250]::read::Reader>::read_define_shape (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[2247]:0x54f254)
    at ruffle_web.wasm.<ruffle_core[4a434d663f7cda39]::display_object::movie_clip::MovieClip>::preload (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[1643]:0x440ce9)
    at ruffle_web.wasm.<ruffle_core[4a434d663f7cda39]::player::Player>::preload (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[1329]:0x3278c1)
    at ruffle_web.wasm.<ruffle_core[4a434d663f7cda39]::player::Player>::tick (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[1138]:0x22bc5d)
    at ruffle_web.wasm.<ruffle_web[d9329c46c5685788]::RuffleHandle>::tick (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[1152]:0x24edd8)
    at ruffle_web.wasm.<ruffle_web[d9329c46c5685788]::RuffleHandle>::new_internal::{closure#0}::{closure#0}::{closure#0} (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[13394]:0x9de832)
    at ruffle_web.wasm.wasm_bindgen[909b301facfb1c54]::convert::closures::_::invoke::<f64, (), true> (wasm://wasm/ruffle_web.wasm-037d73da:wasm-function[12423]:0x9cf69a)
```

# Player Info
Allows script access: false
Renderer: wgpu
Adapter Backend: Gl
Adapter Name: "ANGLE (Imagination Technologies, PowerVR Rogue GE8320, OpenGL ES 3.2)"
Adapter Device Type: Other
Adapter Driver Name: ""
Adapter Driver Info: "WebGL 2.0 (OpenGL ES 3.0 Chromium)"
Enabled features: Features { features_wgpu: FeaturesWGPU(TEXTURE_ADAPTER_SPECIFIC_FORMAT_FEATURES), features_webgpu: FeaturesWebGPU(0x0) }
Available features: Features { features_wgpu: FeaturesWGPU(CLEAR_TEXTURE | PASSTHROUGH_SHADERS), features_webgpu: FeaturesWebGPU(DEPTH32FLOAT_STENCIL8 | TEXTURE_COMPRESSION_ETC2 | TEXTURE_COMPRESSION_ASTC | TEXTURE_COMPRESSION_ASTC_SLICED_3D | IMMEDIATES) }
Current limits: Limits { max_texture_dimension_1d: 8192, max_texture_dimension_2d: 8192, max_texture_dimension_3d: 2048, max_texture_array_layers: 256, max_bind_groups: 4, max_bind_groups_plus_vertex_buffers: 24, max_bindings_per_bind_group: 1000, max_dynamic_uniform_buffers_per_pipeline_layout: 8, max_dynamic_storage_buffers_per_pipeline_layout: 0, max_sampled_textures_per_shader_stage: 16, max_samplers_per_shader_stage: 16, max_storage_buffers_per_shader_stage: 0, max_storage_textures_per_shader_stage: 0, max_uniform_buffers_per_shader_stage: 11, max_binding_array_elements_per_shader_stage: 0, max_binding_array_acceleration_structure_elements_per_shader_stage: 0, max_binding_array_sampler_elements_per_shader_stage: 0, max_uniform_buffer_binding_size: 65536, max_storage_buffer_binding_size: 0, max_vertex_buffers: 8, max_buffer_size: 268435456, max_vertex_attributes: 16, max_vertex_buffer_array_stride: 255, max_inter_stage_shader_variables: 15, min_uniform_buffer_offset_alignment: 64, min_storage_buffer_offset_alignment: 256, max_color_attachments: 4, max_color_attachment_bytes_per_sample: 32, max_compute_workgroup_storage_size: 0, max_compute_invocations_per_workgroup: 0, max_compute_workgroup_size_x: 0, max_compute_workgroup_size_y: 0, max_compute_workgroup_size_z: 0, max_compute_workgroups_per_dimension: 0, max_immediate_size: 0, max_non_sampler_bindings: 1000000, max_task_workgroup_total_count: 0, max_task_workgroups_per_dimension: 0, max_mesh_workgroup_total_count: 0, max_mesh_workgroups_per_dimension: 0, max_task_invocations_per_workgroup: 0, max_task_invocations_per_dimension: 0, max_mesh_invocations_per_workgroup: 0, max_mesh_invocations_per_dimension: 0, max_task_payload_size: 0, max_mesh_output_vertices: 0, max_mesh_output_primitives: 0, max_mesh_output_layers: 0, max_mesh_multiview_view_count: 0, max_blas_primitive_count: 0, max_blas_geometry_count: 0, max_tlas_instance_count: 0, max_acceleration_structures_per_shader_stage: 0, max_buffers_and_acceleration_structures_per_shader_stage: 19, max_multiview_view_count: 0, max_ray_dispatch_count: 0, max_ray_recursion_depth: 0 }
Surface quality: low
Surface samples: 1
Surface size: (932, 581, 1)

# Page Info
Page URL: https://1e14mehnnmuxil3a3bba.c.websim.com/?v=16&__websim_origin=https%3A%2F%2Fwebsim.com&__websim_route=%7B%22type%22%3A%22slug%22%2C%22params%22%3A%7B%22username%22%3A%22AlkalineBattery%22%2C%22slug%22%3A%22corrupt-swfl%22%7D%7D
SWF URL: https://1e14mehnnmuxil3a3bba.c.websim.com/infiltrating_the_airship.swf

# Browser Info
User Agent: Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.0.0 Mobile Safari/537.36
Platform: Linux armv81
Has touch support: true

# Ruffle Info
Version: 0.8.0
Name: 0.8.0
Channel: stable
Built: 2026-11-19T21:19:24.863Z
Commit: cd4cb8f45f144d5a9209f496ee09b60ad136b5b3
Is extension: false

# Metadata
width: 800
height: 450
frameRate: 24
numFrames: 4742
swfVersion: 9
backgroundColor: #FFFFFF
isActionScript3: false
uncompressedLength: 38258365
