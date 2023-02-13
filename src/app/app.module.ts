import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { PickerModule } from '@ctrl/ngx-emoji-mart';

// cmps:
import { AppComponent } from './cmps/app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ChatListComponent } from './cmps/chat-list/chat-list.component';
import { MessageComponent } from './cmps/message/message.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoSelectedChatComponent } from './cmps/no-selected-chat/no-selected-chat.component';
import { ProfileComponent } from './cmps/profile/profile.component';
import { NewChatComponent } from './cmps/new-chat/new-chat.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { SearchMessageComponent } from './cmps/search-message/search-message.component';
import { ContactInfoComponent } from './cmps/contact-info/contact-info.component';
import { CommunitiesComponent } from './cmps/communities/communities.component';
import { StatusComponent } from './cmps/status/status.component';
import { StatusLogoComponent } from './cmps/svgs/status-logo/status-logo.component';
import { CommunityLogoComponent } from './cmps/svgs/community-logo/community-logo.component';
import { NewChatLogoComponent } from './cmps/svgs/new-chat-logo/new-chat-logo.component';
import { MenuLogoComponent } from './cmps/svgs/menu-logo/menu-logo.component';
import { SearchLogoComponent } from './cmps/svgs/search-logo/search-logo.component';
import { FilterLogoComponent } from './cmps/svgs/filter-logo/filter-logo.component';
import { BackLogoComponent } from './cmps/svgs/back-logo/back-logo.component';
import { EmojiLogoComponent } from './cmps/svgs/emoji-logo/emoji-logo.component';
import { CheckMarkLogoComponent } from './cmps/svgs/check-mark-logo/check-mark-logo.component';
import { EditLogoComponent } from './cmps/svgs/edit-logo/edit-logo.component';
import { AttachLogoComponent } from './cmps/svgs/attach-logo/attach-logo.component';
import { VoiceLogoComponent } from './cmps/svgs/voice-logo/voice-logo.component';
import { SendLogoComponent } from './cmps/svgs/send-logo/send-logo.component';
import { EdgeGreenMsgLogoComponent } from './cmps/svgs/edge-green-msg-logo/edge-green-msg-logo.component';
import { NewCommunityLogoComponent } from './cmps/svgs/new-community-logo/new-community-logo.component';
import { ArrowRightLogoComponent } from './cmps/svgs/arrow-right-logo/arrow-right-logo.component';
import { DeleteLogoComponent } from './cmps/svgs/delete-logo/delete-logo.component';
import { XLogoComponent } from './cmps/svgs/x-logo/x-logo.component';
import { AchchhAppLogoComponent } from './cmps/svgs/achchh-app-logo/achchh-app-logo.component';
import { LockLogoComponent } from './cmps/svgs/lock-logo/lock-logo.component';
import { ChatPreviewComponent } from './cmps/chat-preview/chat-preview.component';
import { ImagePreviewComponent } from './cmps/image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    AboutPageComponent,
    ChatListComponent,
    MessageComponent,
    NoSelectedChatComponent,
    ProfileComponent,
    NewChatComponent,
    ContactListComponent,
    SearchMessageComponent,
    ContactInfoComponent,
    CommunitiesComponent,
    StatusComponent,
    StatusLogoComponent,
    CommunityLogoComponent,
    NewChatLogoComponent,
    MenuLogoComponent,
    SearchLogoComponent,
    FilterLogoComponent,
    BackLogoComponent,
    EmojiLogoComponent,
    CheckMarkLogoComponent,
    EditLogoComponent,
    AttachLogoComponent,
    VoiceLogoComponent,
    SendLogoComponent,
    EdgeGreenMsgLogoComponent,
    NewCommunityLogoComponent,
    ArrowRightLogoComponent,
    DeleteLogoComponent,
    XLogoComponent,
    AchchhAppLogoComponent,
    LockLogoComponent,
    ChatPreviewComponent,
    ImagePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
