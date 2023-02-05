import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
