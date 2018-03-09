import { reducer } from './index';

it('Active Tab', () => {
    let result = reducer({
        activeTab: 'Something',
        fetching: false,
        robotsListQa: [],
        robotsListPassedQa: [],
        robotsListSentientOnFire: [],
        robotsListRecycled: [],
        robotsListFactorySeconds: [],
        robotsListReadyToShip: [],
        robotsListShipped: [],
    }, 'TAB_CHANGED');
    expect(result.activeTab).toEqual('Something')
});

it('ROBOTS_FETCHED_QA', () => {
    let result = reducer({
        activeTab: 'Something',
        fetching: false,
        robotsListQa: ['value', 'value 2'],
        robotsListPassedQa: [],
        robotsListSentientOnFire: [],
        robotsListRecycled: [],
        robotsListFactorySeconds: [],
        robotsListReadyToShip: [],
        robotsListShipped: [],
    }, 'ROBOTS_FETCHED_QA');
    expect(result.robotsListQa).toEqual(["value", "value 2"])
});

