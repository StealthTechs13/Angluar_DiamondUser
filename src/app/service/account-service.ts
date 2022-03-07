import { Injectable, Input } from '@angular/core';
import { BaseHttpService } from './base-http-service'
import { environment } from '../../environments/environment';
import { SignInModel } from '../model/signin-model'
import { PlaceBetModel } from '../Model/placebet_model';
import { ParentModel } from '../model/Parent_model';
import { CardModels } from '../Model/CardsModel';

@Injectable()
export class AccountService {
    /************Sign UP MODEL ROUTING PATHS */
    private signInUrl = environment.apiBaseUrl + "Authenticate/ValidLogin";
    private signOutUrl = environment.apiBaseUrl + "Authenticate/logout";
    private checkIsValidUrl = environment.apiBaseUrl + "Authenticate/checkIsValid";
    private changePwdUrl = environment.apiBaseUrl + "SignUPModels/changePwd";
    private getNotificationUrl = environment.apiBaseUrl + "SignUPModels/getUserEmails";
    private getSingleNotificationUrl = environment.apiBaseUrl + "SignUPModels/updateUserEmailStatus";
    private getUserReadEmailsUrl = environment.apiBaseUrl + "SignUPModels/getUserReadEmails";



    /*****MARKETMODEL ROUTING PATHS */
    private getMarketListUrl = environment.apiBaseUrl + "MarketModels/GetMarketList";
    private getCompetitionListUrl = environment.apiBaseUrl + "MarketModels/getCompetitionList";
    private getComMarketListUrl = environment.apiBaseUrl + "MarketModels/GetComMarketList";
    private getMarketRatesUrl = environment.apiBaseUrl + "MarketModels/getDirectRatesFromBetfair";
    private getMarketUrl = environment.apiBaseUrl + "MarketModels/GetMarketBymId";
    private getInplayMarketsUrl = environment.apiBaseUrl + "MarketModels/getAllInplayMarkets";
    private getTeenPattiDataUrl = environment.apiBaseUrl + "VirtualGames/getTeenPattiData";
    private getFixtureUrl = environment.apiBaseUrl + "MarketModels/getFixture";

    /*****SPORTS MODEL ROUTING PATHS */
    private getSportsUrl = environment.apiBaseUrl + "SportsModels/GetSports";
    private getBlockSportsUrl = environment.apiBaseUrl + "SportsModels/getBlockSportsList";

    //****CHIP MODEL ROUTING PATHS */
    private getChipsUrl = environment.apiBaseUrl + "ChipModels/GetChipModels";
    private getTermAndConditionsUrl = environment.apiBaseUrl + "ChipModels/getTermAndConditions";

    //***PlaceBet Model Routing Paths */
    private placeBetUrl = environment.apiBaseUrl + "UserBetModels/PostUserBetModel";
    private placeBetFancyUrl = environment.apiBaseUrl + "UserBetModels/PostFancyBetModel";
    private placeBetCasinoUrl = environment.apiBaseUrl + "UserBetModels/PostUserBetCasinoModel";
    private getAllBetsByUserIdUrl = environment.apiBaseUrl + "UserBetModels/GetUserBetModelById";
    private getAllPendingBetsUrl = environment.apiBaseUrl + "UserBetModels/getPendingBets";
    private getBettingHistoryUrl = environment.apiBaseUrl + "UserBetModels/getBettingHistory";
    private getBettingHistoryWithFiltersUrl = environment.apiBaseUrl + "UserBetModels/getBettingHistoryFilters";
    private getMarketBetsOfUserUrl = environment.apiBaseUrl + "UserBetModels/getMarketBetsOfUser";
    private getFancyBetsOfUserUrl = environment.apiBaseUrl + "UserBetModels/getFancyBetsOfUser";
    private getBetsMarketListUrl = environment.apiBaseUrl + "UserBetModels/getBetMarketList";
    private getAllMarketBetsOfUserUrl = environment.apiBaseUrl + "UserBetModels/getAllMarketUserBets";
    private GetUserSettingBySportsIdUrl = environment.apiBaseUrl + "UserSettingModels/GetUserSettingBySportsId";
    private getScoreUrl = environment.apiBaseUrl + "UserBetModels/getScore";
    private getRollBackFancyListUrl = environment.apiBaseUrl + "FancyRunnerModels/getRollBackFancy";
    private searchRollBackRecordUrl = environment.apiBaseUrl + "FancyRunnerModels/searchRollBackRecord";
    private getRollBackMarketListUrl = environment.apiBaseUrl + "MarketModels/getRollBackMarketList";
    private searchRollBackMarketListUrl = environment.apiBaseUrl + "MarketModels/searchRollBackMarket";
    private getClosedMarketUrl = environment.apiBaseUrl + "MarketModels/getClosedMarket";
    private getMarketRollBackFancyListUrl = environment.apiBaseUrl + "FancyRunnerModels/getMarketRollBackFancy";

    /******AMOUNT MODEL ROUTING PATHS */
    private getUserBalanceUrl = environment.apiBaseUrl + "AmountModels/getExposure";
    private getMainWalletBalanceUrl = environment.apiBaseUrl + "AmountModels/getMainBalnce";
    private transferBalanceFromLiveCasinoWalletToMainWalletUrl = environment.apiBaseUrl + "AmountModels/casinoWalletToMainWallet";
    private transferBalanceFromMainWalletToCasinoWalletUrl = environment.apiBaseUrl + "AmountModels/mainWalletToCasinoWallet";

    /*******Profit Loss Model Routing Path */
    private getProfitLossUrl = environment.apiBaseUrl + "ProfitLossModels/getProfitLossOnRunners";
    private getFancyPandLUrl = environment.apiBaseUrl + "UserBetModels/getFancyCurrentPosition";
    private getResultUrl =environment.apiBaseUrl + "LiveCasinoHistoryModels/getResult";

    /*****ACCOUNT STATEMENT ROUTING */
    private getAccountStatementUrl = environment.apiBaseUrl + "AccountStatementModels/GetAccountStatementModel";
    private searchAccRecordUrl = environment.apiBaseUrl + "AccountStatementModels/searchRecord";
    private getMarketStatementsUrl = environment.apiBaseUrl + "AccountStatementModels/GetSportsMarketStatement";
    private getLiveCasinoHistoryUrl = environment.apiBaseUrl + "AccountStatementModels/getCasinoHistory";
    private getLiveGameHistoryUrl = environment.apiBaseUrl + "AccountStatementModels/getLiveCasinoHistory";
    private getOverAllPandLUrl = environment.apiBaseUrl + "AccountStatementModels/getOverAllPandL";
    private getFancyPlListUrl = environment.apiBaseUrl + "AccountStatementModels/getFancyPlList";
    private saveCardsUrl= environment.apiBaseUrl + "LiveCasinoHistoryModels/saveGameCards";

    constructor(private baseHttpService: BaseHttpService) { }

    /*******SIGNUP MODEL API CALLS ********/
    SignIn(userIpAddress, signInModel: SignInModel): Promise<any> {
        return this.baseHttpService.Post(this.signInUrl + "?ipAddress=" + userIpAddress, signInModel)
            .then(function (response) {
                return response.json();
            });
    }

    SignOut(userId): Promise<any> {
        return this.baseHttpService.Get(this.signOutUrl + "?userId=" + userId)
            .then(function (response) {
                return response.json();
            });
    }

    changePwd(oldPwd, newPwd): Promise<any> {
        return this.baseHttpService.Get(this.changePwdUrl + "?oldPwd=" + oldPwd + "&newPwd=" + newPwd)
            .then(function (response) {
                return response.json();
            });
    }

    checkIsValid(userId): Promise<any> {
        return this.baseHttpService.Get(this.checkIsValidUrl + "?userId=" + userId)
            .then(function (response) {
                return response.json();
            });
    }

    getNotification(): Promise<any> {
        return this.baseHttpService.Get(this.getNotificationUrl + "?userId=" + localStorage.getItem('ClubUserId'))
            .then(function (response) {
                return response.json();
            });
    }

    getSingleNotification(id): Promise<any> {
        return this.baseHttpService.Get(this.getSingleNotificationUrl + "?id=" + id)
            .then(function (response) {
                return response.json();
            });
    }

    getUserReadEmails(skipRec): Promise<any> {
        return this.baseHttpService.Get(this.getUserReadEmailsUrl + "?userId=" + localStorage.getItem('ClubUserId') + "&skipRec=" + skipRec)
            .then(function (response) {
                return response.json();
            });
    }




    /**********************SIGNUP MODEL API CALLS END ******************************************************************/

    /***********************MARKET MODEL API CALLS *****/

    getMarketList(sportsId): Promise<any> {
        return this.baseHttpService.Get(this.getMarketListUrl + "?sportsId=" + sportsId)
            .then(function (response) {
                return response.json();
            });
    }

    getCompetitionList(sportsId): Promise<any> {
        return this.baseHttpService.Get(this.getCompetitionListUrl + "?sportsId=" + sportsId)
            .then(function (response) {
                return response.json();
            });
    }

    getComMarketList(seriesId, sportsId): Promise<any> {
        return this.baseHttpService.Get(this.getComMarketListUrl + "?sportsId=" + sportsId + "&seriesId=" + seriesId)
            .then(function (response) {
                return response.json();
            });
    }

    getMarketRates(marketId, eventId, sportsId) {
        return this.baseHttpService.Get(this.getMarketRatesUrl + "?marketId=" + marketId + "&eventId=" + eventId + "&sportsId=" + sportsId)
            .then(function (response) {
                return response.json();
            });
    }

    getMarket(marketId, parent_Model: ParentModel) {
        return this.baseHttpService.Post(this.getMarketUrl + "?marketId=" + marketId, parent_Model)
            .then(function (response) {
                return response.json();
            });
    }

    getInplayMarkets(): Promise<any> {
        return this.baseHttpService.Get(this.getInplayMarketsUrl)
            .then(function (response) {
                return response.json();
            });
    }

    getFixture(): Promise<any> {
        return this.baseHttpService.Get(this.getFixtureUrl)
            .then(function (response) {
                return response.json();
            });
    }

    getTeenPattiData(type) {
        return this.baseHttpService.Get(this.getTeenPattiDataUrl + "?type=" + type)
            .then(function (response) {
                return response.json();
            });
    }

    /**********************MARKET MODEL API CALLS END ******************************************************************/

    /***********************SPORTS MODEL API CALLS *****/

    getSports(): Promise<any> {
        return this.baseHttpService.Get(this.getSportsUrl)
            .then(function (response) {
                return response.json();
            });
    }

    getBlockSports(): Promise<any> {
        return this.baseHttpService.Get(this.getBlockSportsUrl)
            .then(function (response) {
                return response.json();
            });
    }
    /**********************SPORTS MODEL API CALLS END ******************************************************************/


    /***********************Chip MODEL API CALLS *****/

    getChips(): Promise<any> {
        return this.baseHttpService.Get(this.getChipsUrl)
            .then(function (response) {
                return response.json();
            });
    }

    getTermAndConditions(): Promise<any> {
        return this.baseHttpService.Get(this.getTermAndConditionsUrl)
            .then(function (response) {
                return response.json();
            });
    }

    /**********************Chip MODEL API CALLS END ******************************************************************/


    /*****************PlaceBet Model API CALLS *******/
    placeBet(placeBet: PlaceBetModel, type): Promise<any> {
        if (type == "CASINO") {
            return this.baseHttpService.Post(this.placeBetCasinoUrl, placeBet)
                .then(function (response) {
                    return response.json();
                });
        } else {
            if (placeBet.MarketType == "MATCH_ODDS") {
                return this.baseHttpService.Post(this.placeBetUrl, placeBet)
                    .then(function (response) {
                        return response.json();
                    });
            } else {
                return this.baseHttpService.Post(this.placeBetFancyUrl, placeBet)
                    .then(function (response) {
                        return response.json();
                    });
            }
        }

    }

    getAllBetsByUserId(marketId): Promise<any> {
        return this.baseHttpService.Get(this.getAllBetsByUserIdUrl + "?marketId=" + marketId)
            .then(function (response) {
                return response.json();
            });
    }

    getAllPendingBets(skipRec, userId): Promise<any> {
        return this.baseHttpService.Get(this.getAllPendingBetsUrl + "?skipRec=" + skipRec + "&userId=" + userId)
            .then(function (response) {
                return response.json();
            });
    }

    getRollBackFancyList(skipRec): Promise<any> {
        return this.baseHttpService.Get(this.getRollBackFancyListUrl + "?skipRec=" + skipRec)
            .then(function (response) {
                return response.json();
            });
    }

    searchRollBackRecord(value): Promise<any> {
        return this.baseHttpService.Get(this.searchRollBackRecordUrl + "?value=" + value)
            .then(function (response) {
                return response.json();
            });
    }

    getRollBackMarketList(sportsId): Promise<any> {
        return this.baseHttpService.Get(this.getRollBackMarketListUrl + "?sportsId=" + sportsId)
            .then(function (response) {
                return response.json();
            });
    }

    searchRollBackMarketList(value): Promise<any> {
        return this.baseHttpService.Get(this.searchRollBackMarketListUrl + "?value=" + value)
            .then(function (response) {
                return response.json();
            });
    }

    getClosedMarket(): Promise<any> {
        return this.baseHttpService.Get(this.getClosedMarketUrl)
            .then(function (response) {
                return response.json();
            });
    }

    getMarketRollBackFancyList(marketId): Promise<any> {
        return this.baseHttpService.Get(this.getMarketRollBackFancyListUrl + "?marketId=" + marketId)
            .then(function (response) {
                return response.json();
            });
    }

    getBettingHistory(skipRec, userId): Promise<any> {
        return this.baseHttpService.Get(this.getBettingHistoryUrl + "?skipRec=" + skipRec + "&userId=" + userId)
            .then(function (response) {
                return response.json();
            });
    }

    getBettingHistoryWithFilters(sportsId, skipRec, userId, MarketType): Promise<any> {
        return this.baseHttpService.Get(this.getBettingHistoryWithFiltersUrl + "?sportsId=" + sportsId + "&skipRec=" + skipRec + "&userId=" + userId + "&MarketType=" + MarketType)
            .then(function (response) {
                return response.json();
            });
    }

    getMarketBetsOfUser(userId, marketId, role): Promise<any> {
        return this.baseHttpService.Get(this.getMarketBetsOfUserUrl + "?userId=" + userId + "&marketId=" + marketId + "&role=" + role)
            .then(function (response) {
                return response.json();
            });
    }

    getResult(roundId): Promise<any> {
        return this.baseHttpService.Get(this.getResultUrl + "?roundId=" + roundId)
            .then(function (response) {
                return response.json();
            });
    }

    getFancyBetsOfUser(userId, marketId, role, selectionId): Promise<any> {
        return this.baseHttpService.Get(this.getFancyBetsOfUserUrl + "?userId=" + userId + "&marketId=" + marketId + "&role=" + role + "&selectionId=" + selectionId)
            .then(function (response) {
                return response.json();
            });
    }

    getBetsMarketList(userId): Promise<any> {
        return this.baseHttpService.Get(this.getBetsMarketListUrl + "?userId=" + userId)
            .then(function (response) {
                return response.json();
            });
    }

    getAllMarketBetsOfUser(userId, marketId): Promise<any> {
        return this.baseHttpService.Get(this.getAllMarketBetsOfUserUrl + "?userId=" + userId + "&marketId=" + marketId)
            .then(function (response) {
                return response.json();
            });
    }

    GetUserSettingBySportsId(userId, sportsId): Promise<any> {
        return this.baseHttpService.Get(this.GetUserSettingBySportsIdUrl + "?userId=" + userId + "&sportsId=" + sportsId)
            .then(function (response) {
                return response.json();
            });
    }

    getScore(sportsId, eventId): Promise<any> {
        return this.baseHttpService.Get(this.getScoreUrl + "?sportsId=" + sportsId + "&eventId=" + eventId)
            .then(function (response) {
                return response.json();
            });
    }

    /**********************PlaceBet MODEL API CALLS END ******************************************************************/

    /************** AMOUNT MODEL API CALLS */
    getUserBalance(): Promise<any> {
        return this.baseHttpService.Get(this.getUserBalanceUrl)
            .then(function (response) {
                return response.json();
            });
    }

    getMainWalletBalance(): Promise<any> {
        return this.baseHttpService.Get(this.getMainWalletBalanceUrl)
            .then(function (response) {
                return response.json();
            });
    }

    transferBalanceFromMainWalletToCasinoWallet(amount, password): Promise<any> {
        return this.baseHttpService.Get(this.transferBalanceFromMainWalletToCasinoWalletUrl + "?points=" + amount + "&password=" + password)
            .then(function (response) {
                return response.json();
            });
    }

    transferBalanceFromLiveCasinoWalletToMainWallet(amount, password): Promise<any> {
        return this.baseHttpService.Get(this.transferBalanceFromLiveCasinoWalletToMainWalletUrl + "?points=" + amount + "&password=" + password)
            .then(function (response) {
                return response.json();
            });
    }

    /**********************Amount MODEL API CALLS END ******************************************************************/

    //***********Profit Loss Model API CALLS ***********/
    getProfitLoss(marketId,sportsId): Promise<any> {
        return this.baseHttpService.Get(this.getProfitLossUrl + "?marketId=" + marketId + "&sportsId=" + sportsId)
            .then(function (response) {
                return response.json();
            });
    }


    getFancyPandL(runnerId, marketId): Promise<any> {
        return this.baseHttpService.Get(this.getFancyPandLUrl + "?selectionId=" + runnerId + "&marketId=" + marketId)
            .then(function (response) {
                return response.json();
            });
    }


    /*********************Profit Loss Model API CALLS END */


    /*******Account Statement Model */
    getAccountStatement(id, skipRec, type): Promise<any> {
        return this.baseHttpService.Get(this.getAccountStatementUrl + "?id=" + id + "&skipRec=" + skipRec + "&type=" + type)
            .then(function (response) {
                return response.json();
            });
    }

    searchAccRecord(id, value): Promise<any> {
        return this.baseHttpService.Get(this.searchAccRecordUrl + "?value=" + value + "&id=" + id)
            .then(function (response) {
                return response.json();
            });
    }

    getMarketStatements(id, skipRec): Promise<any> {
        return this.baseHttpService.Get(this.getMarketStatementsUrl + "?id=" + id + "&skipRec=" + skipRec)
            .then(function (response) {
                return response.json();
            });
    }

    getLiveCasinoHistory(skipRec): Promise<any> {
        return this.baseHttpService.Get(this.getLiveCasinoHistoryUrl + "?skipRec=" + skipRec)
            .then(function (response) {
                return response.json();
            });
    }

    getLiveGameHistory(userName, skipRec): Promise<any> {
        return this.baseHttpService.Get(this.getLiveGameHistoryUrl + "?userName=" + userName + "&skipRec=" + skipRec)
            .then(function (response) {
                return response.json();
            });
    }

    getOverAllPanDL(marketId) {
        return this.baseHttpService.Get(this.getOverAllPandLUrl + "?marketId=" + marketId + "&role=" + localStorage.getItem('ClubRole') + "&userId=" + localStorage.getItem('ClubUserId'))
            .then(function (response) {
                return response.json();
            });
    }
    getFancyPlList(marketId) {
        return this.baseHttpService.Get(this.getFancyPlListUrl + "?marketId=" + marketId + "&role=" + localStorage.getItem('ClubRole') + "&userId=" + localStorage.getItem('ClubUserId'))
            .then(function (response) {
                return response.json();
            });
    }
    //******* End */

    saveCards(cardModels:CardModels){
        return this.baseHttpService.Post(this.saveCardsUrl,cardModels)
            .then(function (response) {
                return response.json();
            });
    }
}
