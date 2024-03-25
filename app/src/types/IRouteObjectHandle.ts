/**
 * @interface IRouteObjectHandle Describes the handle of a RouteObject.
 */
interface IRouteObjectHandle {

  /**
   * The link text displayed in the ui.
   */
  displayText: string;

  /**
   * The link used for an anchor link.
   */
  link: string;

  /**
   * The title of the page.
   */
  title: string;
}

export default IRouteObjectHandle;
