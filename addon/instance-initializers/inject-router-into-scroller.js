export function initialize(appInstance) {
  appInstance.registry.injection('service:scroller', 'router', 'router:main');
}

export default {
  name: 'inject-router-into-scroller',
  initialize: initialize
};
