/**
 * Amazon Connect chat widget configuration.
 *
 * Fill these in from AWS Console > Amazon Connect > Communication widgets.
 * While they are empty the site shows a local demo launcher for "Anna"
 * so the experience can be shown to customers before AWS is wired up.
 */
export const connectConfig = {
  /** The widget id from the snippet, e.g. 'a1b2c3d4-...' */
  widgetId: "",
  /** The snippetId value passed to amazon_connect('snippetId', ...) */
  snippetId: "",
  /** CloudFront URL of amazon-connect-chat-interface-client.js */
  scriptUrl: "",
  /** Agent persona shown in the launcher */
  agentName: "Anna",
};

export const isConnectConfigured = () =>
  Boolean(connectConfig.widgetId && connectConfig.snippetId && connectConfig.scriptUrl);
