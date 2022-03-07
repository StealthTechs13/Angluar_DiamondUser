import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { SetbetComponent } from './components/setbet/setbet.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { BetprofitlossComponent } from './components/betprofitloss/betprofitloss.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MobSetBetComponent } from './components/mobile/mob-set-bet/mob-set-bet.component';
import { OpenBetsComponent } from './components/mobile/open-bets/open-bets.component';
import { ProfitLossMobileComponent } from './components/mobile/profit-loss-mobile/profit-loss-mobile.component';
import { MobPasswordchangeComponent } from './components/mobile/mob-passwordchange/mob-passwordchange.component';
import { CompetitionsListingComponent } from './components/mobile/competitions-listing/competitions-listing.component';
import { MatchesListingComponent } from './components/mobile/matches-listing/matches-listing.component';
import { SearchMobileComponent } from './components/mobile/search-mobile/search-mobile.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

import { MobileBettingHistoryComponent } from './components/mobile/mobile-betting-history/mobile-betting-history.component';
import { PointTransferComponent } from './components/point-transfer/point-transfer.component';
import { MobileCasinoComponent } from './components/mobile/mobile-casino/mobile-casino.component';
import { MobilePointTransferComponent } from './components/mobile/mobile-point-transfer/mobile-point-transfer.component';
import { BetGamesComponent } from './components/bet-games/bet-games.component';
import { SensexComponent } from './components/sensex/sensex.component';
import { MobBetgamesComponent } from './components/mobile/mob-betgames/mob-betgames.component';
import { MobSensexComponent } from './components/mobile/mob-sensex/mob-sensex.component';
import { MobAccountStatementComponent } from './components/mobile/mob-account-statement/mob-account-statement.component';
import { MobileCasinoGamesComponent } from './components/mobile/mobile-casino-games/mobile-casino-games.component';
import { ShowMatchBetComponent } from './components/show-match-bet/show-match-bet.component';
import { FancyProfitlossComponent } from './components/fancy-profitloss/fancy-profitloss.component';
import { MShowmatchbetComponent } from './components/mobile/m-showmatchbet/m-showmatchbet.component';
import { MFancyProfitlossComponent } from './components/mobile/m-fancy-profitloss/m-fancy-profitloss.component';
import { BetGameFrameComponent } from './components/bet-game-frame/bet-game-frame.component';
import { MBetgameFrameComponent } from './components/mobile/m-betgame-frame/m-betgame-frame.component';
import { GamesComponent } from './components/games/games.component';
import { MobGamesComponent } from './components/mobile/mob-games/mob-games.component';
import { InPlayComponent } from './components/in-play/in-play.component';
import { MCurrentSportsComponent } from './components/mobile/m-current-sports/m-current-sports.component';
import { LiveCasinoComponent } from './components/live-casino/live-casino.component';
import { VirtualGamesComponent } from './components/virtual-games/virtual-games.component';
import { BettingHistoryComponent } from './components/betting-history/betting-history.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { MobPoliticsComponent } from './components/mobile/mob-politics/mob-politics.component';
import { EmailHistoryComponent } from './components/email-history/email-history.component';
import { MEmailHistoryComponent } from './components/mobile/m-email-history/m-email-history.component';
import { MobBetslipComponent } from './components/mobile/mob-betslip/mob-betslip.component';
import { TeenpattiComponent } from './components/teenpatti/teenpatti.component';
import { TeenpattiBetComponent } from './components/teenpatti-bet/teenpatti-bet.component';
import { TeenpattiWinnersComponent } from './components/teenpatti-winners/teenpatti-winners.component';
import { MTeenpattiBetComponent } from './components/mobile/m-teenpatti-bet/m-teenpatti-bet.component';
import { MTeenpattiWinnersComponent } from './components/mobile/m-teenpatti-winners/m-teenpatti-winners.component';
import { BetslipComponent } from './components/betslip/betslip.component';
import { ResultHistoryComponent } from './components/mobile/result-history/result-history.component';
import { ResultmarketComponent } from './components/resultmarket/resultmarket.component';
import { PokerComponent } from './components/poker/poker.component';
import { SixPlayerComponent } from './components/poker/six-player/six-player.component';
import { Lucky7Component } from './components/lucky7/lucky7.component';
import { AndarbaharaComponent } from './components/andarbahara/andarbahara.component';
import { MLucky7Component } from './components/mobile/m-lucky7/m-lucky7.component';
import { MAndarbaharComponent } from './components/mobile/m-andarbahar/m-andarbahar.component';
import { MyBetsComponent } from './components/my-bets/my-bets.component';
import { NowaCasinoComponent } from './components/nowa-casino/nowa-casino.component';
import { CasinoResultsComponent } from './components/casino-results/casino-results.component';
import { ChangebtnvalueComponent } from './components/changebtnvalue/changebtnvalue.component';
import { BaccaratlistComponent } from './components/baccaratlist/baccaratlist.component';
import { Card32ListComponent } from './components/card32-list/card32-list.component';
import { TeenpattiListComponent } from './components/teenpatti-list/teenpatti-list.component';
import { PokerListComponent } from './components/poker-list/poker-list.component';
import { Lucky7ListComponent } from './components/lucky7-list/lucky7-list.component';
import { DragontigerListComponent } from './components/dragontiger-list/dragontiger-list.component';
import { SportscasinolistComponent } from './components/sportscasinolist/sportscasinolist.component';
import { AblistComponent } from './components/ablist/ablist.component';
import { BollywoodTableComponent } from './components/bollywood-table/bollywood-table.component';
import { WorlilistComponent } from './components/worlilist/worlilist.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { VirtualsportsComponent } from './components/virtualsports/virtualsports.component';
import { LivecasinoComponent } from './components/livecasino/livecasino.component';
import { SlotgameComponent } from './components/slotgame/slotgame.component';
import { MobRecentGameComponent } from './components/mobile/mob-recent-game/mob-recent-game.component';
import { MobIplComponent } from './components/mobile/mob-ipl/mob-ipl.component';
import { MobSportsComponent } from './components/mobile/mob-sports/mob-sports.component';
import { MobCasinoSlotComponent } from './components/mobile/mob-casino-slot/mob-casino-slot.component';
import { MobOthersGameComponent } from './components/mobile/mob-others-game/mob-others-game.component';
import { MobCasinoresultsComponent } from './components/mobile/mob-casinoresults/mob-casinoresults.component';
import { MobChangebtnvalueComponent } from './components/mobile/mob-changebtnvalue/mob-changebtnvalue.component';
import { MobChangePasswordComponent } from './components/mobile/mob-change-password/mob-change-password.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  // {path:'', redirectTo: '/dashboard', pathMatch:'full'},
  // {path:'dashboard', component:DashboardComponent},
  { path: 'home', component: HomeComponent },
  { path: 'home/:sportsId', component: HomeComponent },
  { path: 'set-bet/:sportsId/:eventId/:marketId', component: SetbetComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'betProfitLoss', component: BetprofitlossComponent },
  { path: 'accountStatement', component: AccountStatementComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'mobile-set-bet/:sportsId/:eventId/:marketId', component: MobSetBetComponent },
  { path: 'open-bets', component: OpenBetsComponent },
  { path: 'mobile-profitloss', component: ProfitLossMobileComponent },
  { path: 'changepass-mobile', component: MobPasswordchangeComponent },
  { path: 'competitions-list/:eventTypeId', component: CompetitionsListingComponent },
  { path: 'matches-list/:seriesId', component: MatchesListingComponent },
  { path: 'mob-search', component: SearchMobileComponent },
  { path: 'mob-bettingHistory/:marketId/:type/:selectionId', component: MobileBettingHistoryComponent },
  { path: 'point-transfer', component: PointTransferComponent },
  { path: 'mcasino', component: MobileCasinoComponent },
  { path: 'mpoint-transfer', component: MobilePointTransferComponent },
  { path: 'betgames/:systemId', component: BetGamesComponent },
  { path: 'sensex', component: SensexComponent },
  { path: 'm-betgames/:systemId', component: MobBetgamesComponent },
  { path: 'm-sensex', component: MobSensexComponent },
  { path: 'm-account-statement', component: MobAccountStatementComponent },
  { path: 'mcasino-games', component: MobileCasinoGamesComponent },
  { path: 'showmatchbet/:marketId', component: ShowMatchBetComponent },
  { path: 'fancy-profitloss/:marketId', component: FancyProfitlossComponent },
  { path: 'm-showmatchbet/:marketId', component: MShowmatchbetComponent },
  { path: 'm-fancy-profitloss/:marketId', component: MFancyProfitlossComponent },
  { path: 'betgame-frame/:page/:system', component: BetGameFrameComponent },
  { path: 'm-betgame-frame/:page/:system', component: MBetgameFrameComponent },
  { path: 'games', component: GamesComponent },
  { path: 'm_games', component: MobGamesComponent },
  { path: 'in_play', component: InPlayComponent },
  { path: 'current_sport/:sportsId', component: MCurrentSportsComponent },
  { path: 'livecasino', component: LiveCasinoComponent },
  { path: 'virtual_games', component: VirtualGamesComponent },
  { path: 'betting_history/:marketId/:type/:selectionId', component: BettingHistoryComponent },
  { path: 'politics/:sportsId/:eventId/:marketId', component: PoliticsComponent },
  { path: 'm-politics/:sportsId/:eventId/:marketId', component: MobPoliticsComponent },
  { path: 'email-history', component: EmailHistoryComponent },
  { path: 'result-history', component: ResultmarketComponent },
  { path: 'm_email-history', component: MEmailHistoryComponent },
  { path: 'm_betslip', component: MobBetslipComponent },
  { path: 'teenpatti', component: TeenpattiComponent },
  { path: 'teenpatti_bet/:type', component: TeenpattiBetComponent },
  { path: 'm_teenpatti_bet/:type', component: MTeenpattiBetComponent },
  { path: 'teenpatti_winners', component: TeenpattiWinnersComponent },
  { path: 'm_teenpatti_winners', component: MTeenpattiWinnersComponent },
  { path: 'm_result_history', component: ResultHistoryComponent },
  { path: 'bet_slip', component: BetslipComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'poker/6player', component: SixPlayerComponent },
  { path: 'lucky7A/:type', component: Lucky7Component },
  { path: 'andarbahar2/:type', component: AndarbaharaComponent },
  { path: 'm-lucky7A/:type', component: MLucky7Component },
  { path: 'm-andarbahar/:type', component: MAndarbaharComponent },
  // {path:'dashboard', component:DashboardComponent},
  { path: 'my_bets', component: MyBetsComponent },
  { path: 'nowa_casino', component: NowaCasinoComponent },
  { path: 'coming_soon', component: ComingSoonComponent },
  { path: 'casinoresults', component: CasinoResultsComponent },
  { path: 'changebtnvalue', component: ChangebtnvalueComponent },
  { path: 'baccaratlist', component: BaccaratlistComponent },
  { path: 'card32-list', component: Card32ListComponent },
  { path: 'teenpatti-list', component: TeenpattiListComponent },
  { path: 'poker-list', component: PokerListComponent },
  { path: 'lucky7-list', component: Lucky7ListComponent },
  { path: 'dragontiger-list', component: DragontigerListComponent },
  { path: 'sportscasinolist', component: SportscasinolistComponent },
  { path: 'ablist', component: AblistComponent },
  { path: 'bollywood-table', component: BollywoodTableComponent },
  { path: 'worlilist', component: WorlilistComponent },
  { path: 'lottery', component: LotteryComponent },
  { path: 'virtualsports', component: VirtualsportsComponent },
  { path: 'livecasino', component: LivecasinoComponent },
  { path: 'slotgame', component: SlotgameComponent },
  { path: 'recent-game', component: MobRecentGameComponent },
  { path: 'mob-ipl', component: MobIplComponent },
  { path: 'mob-sports', component: MobSportsComponent },
  { path: 'mob-casino-slot', component: MobCasinoSlotComponent },
  { path: 'mob-others-game', component: MobOthersGameComponent },
  { path: 'mob-casinoresults', component: MobCasinoresultsComponent },
  { path: 'mob-changebtnvalue', component: MobChangebtnvalueComponent },
  { path: 'mob-change-password', component: MobChangePasswordComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
