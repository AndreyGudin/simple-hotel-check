import { put } from 'redux-saga/effects';

import type { PutEffect } from 'redux-saga/effects';

import { getHotelsApi } from '../api/getHotelsApi';
import { hotelsActions } from '../slice/hotelsSlice';
import type { HotelsResponse } from '../types/HotelResponse';
import type { PayloadAction } from '@reduxjs/toolkit';

export function* getHotelsSaga({
  payload
}: PayloadAction<{ city: string }>): Generator<
  | Promise<HotelsResponse>
  | PutEffect<{
      payload: any;
      type: 'hotels/save';
    }>,
  void,
  HotelsResponse
> {
  const {
    results: { hotels }
  }: HotelsResponse = yield getHotelsApi(payload.city);
  console.log('hotels', hotels);
  yield put(hotelsActions.save(hotels));
}
