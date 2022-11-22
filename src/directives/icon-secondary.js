//This directive accepts object syntax instead of modifiers as the other icon
export default {
  beforeMount(element, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-yellow-400 text-xl`;

    if (binding.value.right) {
      iconClass += " float-right";
    }

    element.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
