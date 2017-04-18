// IMPORTS
import {Config} from './aurelia-plugins-google-recaptcha-config';


// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-google-recaptcha-element');
}