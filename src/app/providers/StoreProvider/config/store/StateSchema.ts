import type { UserSchema } from '../../../../../entities/User';
import type { HotelsSchema } from '../../../../../features/SearchPanel';
import type { LikedSchema } from '../../../../../widget/LikeButton/model/types/likedSchema';

export interface StateSchema {
  hotels: HotelsSchema;
  favorite: LikedSchema;
  user: UserSchema;
}