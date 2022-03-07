"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var account_service_1 = require("./service/account-service");
var base_http_service_1 = require("./service/base-http-service");
var auth_guard_service_1 = require("./service/auth-guard.service");
var http_2 = require("@angular/common/http");
var ngx_pagination_1 = require("ngx-pagination");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var sign_in_component_1 = require("./components/sign-in/sign-in.component");
var home_component_1 = require("./components/home/home.component");
var header_component_1 = require("./components/layouts/header/header.component");
var footer_component_1 = require("./components/layouts/footer/footer.component");
var setbet_component_1 = require("./components/setbet/setbet.component");
var my_account_component_1 = require("./components/my-account/my-account.component");
var betprofitloss_component_1 = require("./components/betprofitloss/betprofitloss.component");
var account_statement_component_1 = require("./components/account-statement/account-statement.component");
var change_password_component_1 = require("./components/change-password/change-password.component");
var mobile_header_component_1 = require("./components/mobile/mobile-header/mobile-header.component");
var left_menu_component_1 = require("./components/mobile/left-menu/left-menu.component");
var right_menu_component_1 = require("./components/mobile/right-menu/right-menu.component");
var mob_set_bet_component_1 = require("./components/mobile/mob-set-bet/mob-set-bet.component");
var open_bets_component_1 = require("./components/mobile/open-bets/open-bets.component");
var profit_loss_mobile_component_1 = require("./components/mobile/profit-loss-mobile/profit-loss-mobile.component");
var mob_passwordchange_component_1 = require("./components/mobile/mob-passwordchange/mob-passwordchange.component");
var competitions_listing_component_1 = require("./components/mobile/competitions-listing/competitions-listing.component");
var matches_listing_component_1 = require("./components/mobile/matches-listing/matches-listing.component");
var search_mobile_component_1 = require("./components/mobile/search-mobile/search-mobile.component");
var mobile_loader_component_1 = require("./components/mobile/mobile-loader/mobile-loader.component");
var mobile_betting_history_component_1 = require("./components/mobile/mobile-betting-history/mobile-betting-history.component");
var point_transfer_component_1 = require("./components/point-transfer/point-transfer.component");
var mobile_casino_component_1 = require("./components/mobile/mobile-casino/mobile-casino.component");
var mobile_point_transfer_component_1 = require("./components/mobile/mobile-point-transfer/mobile-point-transfer.component");
var safe_pipe_1 = require("./safe.pipe");
var bet_games_component_1 = require("./components/bet-games/bet-games.component");
var sensex_component_1 = require("./components/sensex/sensex.component");
var mob_betgames_component_1 = require("./components/mobile/mob-betgames/mob-betgames.component");
var mob_sensex_component_1 = require("./components/mobile/mob-sensex/mob-sensex.component");
var mob_account_statement_component_1 = require("./components/mobile/mob-account-statement/mob-account-statement.component");
var mobile_casino_games_component_1 = require("./components/mobile/mobile-casino-games/mobile-casino-games.component");
var show_match_bet_component_1 = require("./components/show-match-bet/show-match-bet.component");
var fancy_profitloss_component_1 = require("./components/fancy-profitloss/fancy-profitloss.component");
var m_showmatchbet_component_1 = require("./components/mobile/m-showmatchbet/m-showmatchbet.component");
var m_fancy_profitloss_component_1 = require("./components/mobile/m-fancy-profitloss/m-fancy-profitloss.component");
var bet_game_frame_component_1 = require("./components/bet-game-frame/bet-game-frame.component");
var m_betgame_frame_component_1 = require("./components/mobile/m-betgame-frame/m-betgame-frame.component");
var keepalive_1 = require("@ng-idle/keepalive");
var games_component_1 = require("./components/games/games.component");
var mob_games_component_1 = require("./components/mobile/mob-games/mob-games.component");
var in_play_component_1 = require("./components/in-play/in-play.component");
var m_current_sports_component_1 = require("./components/mobile/m-current-sports/m-current-sports.component");
var live_casino_component_1 = require("./components/live-casino/live-casino.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var ui_service_1 = require("../app/service/ui-service");
var pager_service_1 = require("../app/service/pager.service");
var betslip_component_1 = require("./components/betslip/betslip.component");
var msg_component_1 = require("./components/msg/msg.component");
var mob_betslip_component_1 = require("./components/mobile/mob-betslip/mob-betslip.component");
var virtual_games_component_1 = require("./components/virtual-games/virtual-games.component");
var betting_history_component_1 = require("./components/betting-history/betting-history.component");
var politics_component_1 = require("./components/politics/politics.component");
var mob_politics_component_1 = require("./components/mobile/mob-politics/mob-politics.component");
var mobile_footer_component_1 = require("./components/mobile/mobile-footer/mobile-footer.component");
var point_modal_component_1 = require("./components/point-modal/point-modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sign_in_component_1.SignInComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                setbet_component_1.SetbetComponent,
                my_account_component_1.MyAccountComponent,
                betprofitloss_component_1.BetprofitlossComponent,
                account_statement_component_1.AccountStatementComponent,
                change_password_component_1.ChangePasswordComponent,
                mobile_header_component_1.MobileHeaderComponent,
                left_menu_component_1.LeftMenuComponent,
                right_menu_component_1.RightMenuComponent,
                mob_set_bet_component_1.MobSetBetComponent,
                open_bets_component_1.OpenBetsComponent,
                profit_loss_mobile_component_1.ProfitLossMobileComponent,
                mob_passwordchange_component_1.MobPasswordchangeComponent,
                competitions_listing_component_1.CompetitionsListingComponent,
                matches_listing_component_1.MatchesListingComponent,
                search_mobile_component_1.SearchMobileComponent,
                mobile_loader_component_1.MobileLoaderComponent,
                mobile_betting_history_component_1.MobileBettingHistoryComponent,
                point_transfer_component_1.PointTransferComponent,
                mobile_casino_component_1.MobileCasinoComponent,
                mobile_point_transfer_component_1.MobilePointTransferComponent,
                safe_pipe_1.SafePipe,
                bet_games_component_1.BetGamesComponent,
                sensex_component_1.SensexComponent,
                mob_betgames_component_1.MobBetgamesComponent,
                mob_sensex_component_1.MobSensexComponent,
                mob_account_statement_component_1.MobAccountStatementComponent,
                mobile_casino_games_component_1.MobileCasinoGamesComponent,
                show_match_bet_component_1.ShowMatchBetComponent,
                fancy_profitloss_component_1.FancyProfitlossComponent,
                m_showmatchbet_component_1.MShowmatchbetComponent,
                m_fancy_profitloss_component_1.MFancyProfitlossComponent,
                bet_game_frame_component_1.BetGameFrameComponent,
                m_betgame_frame_component_1.MBetgameFrameComponent,
                games_component_1.GamesComponent,
                mob_games_component_1.MobGamesComponent,
                in_play_component_1.InPlayComponent,
                m_current_sports_component_1.MCurrentSportsComponent,
                live_casino_component_1.LiveCasinoComponent,
                sidebar_component_1.SidebarComponent,
                betslip_component_1.BetslipComponent,
                msg_component_1.MsgComponent,
                mob_betslip_component_1.MobBetslipComponent,
                virtual_games_component_1.VirtualGamesComponent,
                betting_history_component_1.BettingHistoryComponent,
                politics_component_1.PoliticsComponent,
                mob_politics_component_1.MobPoliticsComponent,
                mobile_footer_component_1.MobileFooterComponent,
                point_modal_component_1.PointModalComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule,
                keepalive_1.NgIdleKeepaliveModule.forRoot(),
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, account_service_1.AccountService, base_http_service_1.BaseHttpService, auth_guard_service_1.AuthGuardService, ui_service_1.UiService, pager_service_1.PagerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
