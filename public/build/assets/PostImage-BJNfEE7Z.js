import { _ as _sfc_main$1 } from "./AppInputFile-BtOpaExx.js";
import { u as useFormContext } from "./useFormContext-Bd_C1v1K.js";
import { u as usePostStore } from "./PostStore-AFpzrARk.js";
import { f as createElementBlock, g as openBlock, j as createVNode, u as unref } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./AppInputText-CnCOpisB.js";
import "./app-NqH6V6F3.js";
import "./slug-BnyHR7ug.js";
const _hoisted_1 = { class: "mt-5" };
const _sfc_main = {
  __name: "PostImage",
  setup(__props) {
    const postStore = usePostStore();
    const { isCreate } = useFormContext();
    const getImagePreviewURL = () => {
      if (!isCreate.value && postStore.post.image_url) {
        return postStore.post.image_url;
      }
      return null;
    };
    return (_ctx, _cache) => {
      const _component_AppInputFile = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_AppInputFile, {
          modelValue: unref(postStore).post.image,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(postStore).post.image = $event),
          "image-preview-url": getImagePreviewURL(),
          onRemoveFile: _cache[1] || (_cache[1] = ($event) => unref(postStore).post.remove_previous_image = true)
        }, null, 8, ["modelValue", "image-preview-url"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
