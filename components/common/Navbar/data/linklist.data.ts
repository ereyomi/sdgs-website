import { MenuListType } from '../model/LinkListType';

export const menuLinks: MenuListType[] = [
  {
    id: 1,
    label: 'Who we are',
    subMenu: [
      {
        id: 1,
        label: 'About us',
        urlTarget: '_self',
        url: 'about-us',
        links: [
          {
            id: 1,
            label: 'Frequently Asked Questions',
            urlTarget: '_self',
            url: 'faqs',
            cssClasses: '',
          },
        ],
      },
      {
        id: 2,
        label: 'Leadership',
        urlTarget: '_self',
        url: 'leadership',
        links: [
          {
            id: 1,
            label: 'Organization Chart',
            urlTarget: '_self',
            url: 'orc',
            cssClasses: '',
          },
          {
            id: 1,
            label: 'Past Administrator',
            urlTarget: '_self',
            url: 'orc',
            cssClasses: '',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Who we are',
    subMenu: []
  }
];
