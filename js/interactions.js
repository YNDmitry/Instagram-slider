Webflow.require('ix2').init({
  events: {
    'e-3': {
      id: 'e-3',
      name: 'Unnamed interaction',
      animationType: 'custom',
      eventTypeId: 'SLIDER_ACTIVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-4',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-4',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: 'page|slide1',
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1606996843760,
    },
    'e-5': {
      id: 'e-5',
      name: 'Unnamed interaction',
      animationType: 'custom',
      eventTypeId: 'SLIDER_ACTIVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-6',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-6',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: 'page|slide2',
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1606997381752,
    },
    'e-7': {
      id: 'e-7',
      name: 'Unnamed interaction',
      animationType: 'custom',
      eventTypeId: 'SLIDER_ACTIVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-8',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: 'page|slide3',
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1606997441351,
    },
  },
  actionLists: {
    'a-4': {
      id: 'a-4',
      title: 'progress-line-1',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-4-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 0,
                target: {
                  selector: '.line.slide-1',
                  selectorGuids: [
                    'aa742eb9-c8b3-2dd0-6078-60454a982df3',
                    '8b8226be-2197-7457-9920-ba5acb481ef8',
                  ],
                },
                xValue: -100,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-4-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 4000,
                target: {
                  selector: '.line.slide-1',
                  selectorGuids: [
                    'aa742eb9-c8b3-2dd0-6078-60454a982df3',
                    '8b8226be-2197-7457-9920-ba5acb481ef8',
                  ],
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1606996846017,
      useFirstGroupAsInitialState: true,
    },
    'a-6': {
      id: 'a-6',
      title: 'progress-line-1 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-6-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 0,
                target: {
                  selector: '.line.slide-2',
                  selectorGuids: [
                    'aa742eb9-c8b3-2dd0-6078-60454a982df3',
                    '9a76a002-d15e-188d-90a9-76f52f47b5b3',
                  ],
                },
                xValue: -100,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-6-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 5000,
                target: {
                  selector: '.line.slide-2',
                  selectorGuids: [
                    'aa742eb9-c8b3-2dd0-6078-60454a982df3',
                    '9a76a002-d15e-188d-90a9-76f52f47b5b3',
                  ],
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1606996846017,
      useFirstGroupAsInitialState: true,
    },
    'a-8': {
      id: 'a-8',
      title: 'progress-line-1 3',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-8-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 0,
                target: {
                  selector: '.line.slide-3',
                  selectorGuids: [
                    'aa742eb9-c8b3-2dd0-6078-60454a982df3',
                    'f109fa85-4cf9-5dab-4b3f-83630f16da5a',
                  ],
                },
                xValue: -100,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-8-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 6000,
                target: {
                  selector: '.line.slide-3',
                  selectorGuids: [
                    'aa742eb9-c8b3-2dd0-6078-60454a982df3',
                    'f109fa85-4cf9-5dab-4b3f-83630f16da5a',
                  ],
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1606996846017,
      useFirstGroupAsInitialState: true,
    },
  },
  site: {
    mediaQueries: [
      { key: 'main', min: 992, max: 10000 },
      { key: 'medium', min: 768, max: 991 },
      { key: 'small', min: 480, max: 767 },
      { key: 'tiny', min: 0, max: 479 },
    ],
  },
})