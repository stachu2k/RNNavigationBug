import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('Explore', () => App);
Navigation.registerComponent('Downloads', () => App);
Navigation.registerComponent('Notifications', () => App);
Navigation.registerComponent('Hamburger', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            titleDisplayMode: 'alwaysShow',
          },
        },
        id: 'BottomTabsId',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Home',
                    name: 'Home',
                    passProps: {
                      shouldShowSticky: false,
                    },
                    options: {
                      topBar: {
                        title: {
                          text: 'Home',
                          alignment: 'center',
                        },
                        background: {
                          color: 'white',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  selectedTextColor: 'rgb(13, 191, 109)',
                  textColor: 'transparent',
                  icon: require('./img/home.png'),
                  iconColor: 'rgb(95, 93, 112)',
                  selectedIconColor: 'rgb(13, 191, 109)',
                  fontSize: 12,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Explore',
                    name: 'Explore',
                    options: {
                      topBar: {
                        title: {
                          text: 'Explore',
                          alignment: 'center',
                        },
                        background: {
                          color: 'white',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Explore',
                  selectedTextColor: 'rgb(13, 191, 109)',
                  textColor: 'transparent',
                  icon: require('./img/details.png'),
                  iconColor: 'rgb(95, 93, 112)',
                  selectedIconColor: 'rgb(13, 191, 109)',
                  fontSize: 12,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Downloads',
                    name: 'Downloads',
                    options: {
                      topBar: {
                        title: {
                          text: 'Downloads',
                          alignment: 'center',
                        },
                        background: {
                          color: 'white',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Downloads',
                  selectedTextColor: 'rgb(13, 191, 109)',
                  textColor: 'transparent',
                  icon: require('./img/download.png'),
                  iconColor: 'rgb(95, 93, 112)',
                  selectedIconColor: 'rgb(13, 191, 109)',
                  fontSize: 12,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Notifications',
                    name: 'Notifications',
                    options: {
                      topBar: {
                        title: {
                          text: 'Notifications',
                          alignment: 'center',
                        },
                        background: {
                          color: 'white',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Notifications',
                  selectedTextColor: 'rgb(13, 191, 109)',
                  textColor: 'transparent',
                  icon: require('./img/bell.png'),
                  iconColor: 'rgb(95, 93, 112)',
                  selectedIconColor: 'rgb(13, 191, 109)',
                  fontSize: 12,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Hamburger',
                    name: 'Hamburger',
                    options: {
                      topBar: {
                        title: {
                          text: 'Hamburger',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: ' ',
                  textColor: 'transparent',
                  icon: require('./img/hamburger.png'),
                  selectedIcon: require('./img/cross.png'),
                  iconColor: 'rgb(95, 93, 112)',
                  selectedIconColor: 'rgb(13, 191, 109)',
                  fontSize: 12,
                },
              },
            },
          },
        ],
      },
    },
  });
});
