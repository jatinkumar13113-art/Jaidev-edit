/* GLOBAL DATA STORE – SPCK SAFE */
window.Store = (() => {
  const KEY = "JAIDEV_TEMPLATES";

  function get() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function set(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  return {
    all: get,
    add: (item) => set([...get(), item]),
    remove: (id) => set(get().filter(t => t.id !== id))
  };
})();