define([
  '../../..//core/list',
  '../../..//module/Button'
], function (list, Button) {
  /**
   * @class module.Toolbar
   *
   * Toolbar
   */
  var Toolbar = function () {
    var button = new Button();

    this.update = function ($toolbar, styleInfo) {
      button.update($toolbar, styleInfo);
    };

    /**
     * @param {Node} button
     * @param {String} eventName
     * @param {String} value
     */
    this.updateRecentColor = function (buttonNode, eventName, value) {
      button.updateRecentColor(buttonNode, eventName, value);
    };

    /**
     * activate buttons exclude codeview
     * @param {jQuery} $toolbar
     */
    this.activate = function ($toolbar) {
      $toolbar.find('button')
              .not('button[data-event="codeview"]')
              .removeClass('disabled');
    };

    /**
     * deactivate buttons exclude codeview
     * @param {jQuery} $toolbar
     */
    this.deactivate = function ($toolbar) {
      $toolbar.find('button')
              .not('button[data-event="codeview"]')
              .addClass('disabled');
    };

    /**
     *
     * @param {jQuery} $container
     * @param {Boolean} [bFullscreen=false]
     */
    this.updateFullscreen = function ($container, bFullscreen) {
      var $btn = $container.find('button[data-event="fullscreen"]');
      $btn.toggleClass('active', bFullscreen);
    };

    /**
     *
     * @param {jQuery} $container
     * @param {Boolean} [isCodeview=false]
     */
    this.updateCodeview = function ($container, isCodeview) {
      var $btn = $container.find('button[data-event="codeview"]');
      $btn.toggleClass('active', isCodeview);
    };
  };

  return Toolbar;
});
