
export const shouldDisplayCustomHeader = (screenName) => {
    const customHeaderPages = ['Account', 'Business', 'Notification','Services','Statistics','Subscription']; // List of pages where custom header should be displayed
    return customHeaderPages.includes(screenName);
  };