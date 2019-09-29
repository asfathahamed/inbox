import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight, RefreshCw, Inbox, User, Tag, Plus, Paperclip, Star, Edit2 } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Inbox,
  User,
  Tag,
  Plus,
  Paperclip,
  Star,
  Edit2
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }