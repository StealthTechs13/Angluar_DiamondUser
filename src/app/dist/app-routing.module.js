"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sign_in_component_1 = require("./components/sign-in/sign-in.component");
var home_component_1 = require("./components/home/home.component");
var setbet_component_1 = require("./components/setbet/setbet.component");
var my_account_component_1 = require("./components/my-account/my-account.component");
var betprofitloss_component_1 = require("./components/betprofitloss/betprofitloss.component");
var account_statement_component_1 = require("./components/account-statement/account-statement.component");
var change_password_component_1 = require("./components/change-password/change-password.component");
var mob_set_bet_component_1 = require("./components/mobile/mob-set-bet/mob-set-bet.component");
var open_bets_component_1 = require("./components/mobile/open-bets/open-bets.component");
var profit_loss_mobile_component_1 = require("./components/mobile/profit-loss-mobile/profit-loss-mobile.component");
var mob_passwordchange_component_1 = require("./components/mobile/mob-passwordchange/mob-passwordchange.component");
var competitions_listing_component_1 = require("./components/mobile/competitions-listing/competitions-listing.component");
var matches_listing_component_1 = require("./components/mobile/matches-listing/matches-listing.component");
var search_mobile_component_1 = require("./components/mobile/search-mobile/search-mobile.component");
var mobile_betting_history_component_1 = require("./components/mobile/mobile-betting-history/mobile-betting-history.component");
var point_transfer_component_1 = require("./components/point-transfer/point-transfer.component");
var mobile_casino_component_1 = require("./components/mobile/mobile-casino/mobile-casino.component");
var mobile_point_transfer_component_1 = require("./components/mobile/mobile-point-transfer/mobile-point-transfer.component");
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
var games_component_1 = require("./components/games/games.component");
var mob_games_component_1 = require("./components/mobile/mob-games/mob-games.component");
var in_play_component_1 = require("./components/in-play/in-play.component");
var m_current_sports_component_1 = require("./components/mobile/m-current-sports/m-current-sports.component");
var live_casino_component_1 = require("./components/live-casino/live-casino.component");
var virtual_games_component_1 = require("./components/virtual-games/virtual-games.component");
var betting_history_component_1 = require("./components/betting-history/betting-history.component");
var politics_component_1 = require("./components/politics/politics.component");
var mob_politics_component_1 = require("./components/mobile/mob-politics/mob-politics.component");
var routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: sign_in_component_1.SignInComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'home/:sportsId', component: home_component_1.HomeComponent },
    { path: 'set-bet/:sportsId/:eventId/:marketId', component: setbet_component_1.SetbetComponent },
    { path: 'my-account', component: my_account_component_1.MyAccountComponent },
    { path: 'betProfitLoss', component: betprofitloss_component_1.BetprofitlossComponent },
    { path: 'accountStatement', component: account_statement_component_1.AccountStatementComponent },
    { path: 'changePassword', component: change_password_component_1.ChangePasswordComponent },
    { path: 'mobile-set-bet/:sportsId/:eventId/:marketId', component: mob_set_bet_component_1.MobSetBetComponent },
    { path: 'open-bets', component: open_bets_component_1.OpenBetsComponent },
    { path: 'mobile-profitloss', component: profit_loss_mobile_component_1.ProfitLossMobileComponent },
    { path: 'changepass-mobile', component: mob_passwordchange_component_1.MobPasswordchangeComponent },
    { path: 'competitions-list/:eventTypeId', component: competitions_listing_component_1.CompetitionsListingComponent },
    { path: 'matches-list/:seriesId', component: matches_listing_component_1.MatchesListingComponent },
    { path: 'mob-search', component: search_mobile_component_1.SearchMobileComponent },
    { path: 'mob-bettingHistory/:marketId/:type/:selectionId', component: mobile_betting_history_component_1.MobileBettingHistoryComponent },
    { path: 'point-transfer', component: point_transfer_component_1.PointTransferComponent },
    { path: 'mcasino', component: mobile_casino_component_1.MobileCasinoComponent },
    { path: 'mpoint-transfer', component: mobile_point_transfer_component_1.MobilePointTransferComponent },
    { path: 'betgames/:systemId', component: bet_games_component_1.BetGamesComponent },
    { path: 'sensex', component: sensex_component_1.SensexComponent },
    { path: 'm-betgames/:systemId', component: mob_betgames_component_1.MobBetgamesComponent },
    { path: 'm-sensex', component: mob_sensex_component_1.MobSensexComponent },
    { path: 'm-account-statement', component: mob_account_statement_component_1.MobAccountStatementComponent },
    { path: 'mcasino-games', component: mobile_casino_games_component_1.MobileCasinoGamesComponent },
    { path: 'showmatchbet/:marketId', component: show_match_bet_component_1.ShowMatchBetComponent },
    { path: 'fancy-profitloss/:marketId', component: fancy_profitloss_component_1.FancyProfitlossComponent },
    { path: 'm-showmatchbet/:marketId', component: m_showmatchbet_component_1.MShowmatchbetComponent },
    { path: 'm-fancy-profitloss/:marketId', component: m_fancy_profitloss_component_1.MFancyProfitlossComponent },
    { path: 'betgame-frame/:page/:system', component: bet_game_frame_component_1.BetGameFrameComponent },
    { path: 'm-betgame-frame/:page/:system', component: m_betgame_frame_component_1.MBetgameFrameComponent },
    { path: 'games', component: games_component_1.GamesComponent },
    { path: 'm_games', component: mob_games_component_1.MobGamesComponent },
    { path: 'in_play', component: in_play_component_1.InPlayComponent },
    { path: 'current_sport/:sportsId', component: m_current_sports_component_1.MCurrentSportsComponent },
    { path: 'livecasino', component: live_casino_component_1.LiveCasinoComponent },
    { path: 'virtual_games', component: virtual_games_component_1.VirtualGamesComponent },
    { path: 'betting_history/:marketId/:type/:selectionId', component: betting_history_component_1.BettingHistoryComponent },
    { path: 'politics', component: politics_component_1.PoliticsComponent },
    { path: 'm-politics', component: mob_politics_component_1.MobPoliticsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
