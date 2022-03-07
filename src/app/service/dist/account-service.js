"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var AccountService = /** @class */ (function () {
    function AccountService(baseHttpService) {
        this.baseHttpService = baseHttpService;
        /************Sign UP MODEL ROUTING PATHS */
        this.signInUrl = environment_1.environment.apiBaseUrl + "Authenticate/ValidLogin";
        this.signOutUrl = environment_1.environment.apiBaseUrl + "Authenticate/logout";
        this.checkIsValidUrl = environment_1.environment.apiBaseUrl + "Authenticate/checkIsValid";
        this.changePwdUrl = environment_1.environment.apiBaseUrl + "SignUPModels/changePwd";
        /*****MARKETMODEL ROUTING PATHS */
        this.getMarketListUrl = environment_1.environment.apiBaseUrl + "MarketModels/GetMarketList";
        this.getCompetitionListUrl = environment_1.environment.apiBaseUrl + "MarketModels/getCompetitionList";
        this.getComMarketListUrl = environment_1.environment.apiBaseUrl + "MarketModels/GetComMarketList";
        this.getMarketRatesUrl = environment_1.environment.apiBaseUrl + "MarketModels/getDirectRatesFromBetfair";
        this.getMarketUrl = environment_1.environment.apiBaseUrl + "MarketModels/GetMarketBymId";
        this.getInplayMarketsUrl = environment_1.environment.apiBaseUrl + "MarketModels/getAllInplayMarkets";
        /*****SPORTS MODEL ROUTING PATHS */
        this.getSportsUrl = environment_1.environment.apiBaseUrl + "SportsModels/GetSports";
        //****CHIP MODEL ROUTING PATHS */
        this.getChipsUrl = environment_1.environment.apiBaseUrl + "ChipModels/GetChipModels";
        //***PlaceBet Model Routing Paths */
        this.placeBetUrl = environment_1.environment.apiBaseUrl + "UserBetModels/PostUserBetModel";
        this.placeBetFancyUrl = environment_1.environment.apiBaseUrl + "UserBetModels/PostFancyBetModel";
        this.getAllBetsByUserIdUrl = environment_1.environment.apiBaseUrl + "UserBetModels/GetUserBetModelById";
        this.getAllPendingBetsUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getPendingBets";
        this.getBettingHistoryUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getBettingHistory";
        this.getBettingHistoryWithFiltersUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getBettingHistoryFilters";
        this.getMarketBetsOfUserUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getMarketBetsOfUser";
        this.getFancyBetsOfUserUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getFancyBetsOfUser";
        this.getBetsMarketListUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getBetMarketList";
        this.getAllMarketBetsOfUserUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getAllMarketBets";
        /******AMOUNT MODEL ROUTING PATHS */
        this.getUserBalanceUrl = environment_1.environment.apiBaseUrl + "AmountModels/getExposure";
        this.getMainWalletBalanceUrl = environment_1.environment.apiBaseUrl + "AmountModels/getMainBalnce";
        this.transferBalanceFromLiveCasinoWalletToMainWalletUrl = environment_1.environment.apiBaseUrl + "AmountModels/casinoWalletToMainWallet";
        this.transferBalanceFromMainWalletToCasinoWalletUrl = environment_1.environment.apiBaseUrl + "AmountModels/mainWalletToCasinoWallet";
        /*******Profit Loss Model Routing Path */
        this.getProfitLossUrl = environment_1.environment.apiBaseUrl + "ProfitLossModels/getProfitLossOnRunners";
        this.getFancyPandLUrl = environment_1.environment.apiBaseUrl + "UserBetModels/getFancyCurrentPosition";
        /*****ACCOUNT STATEMENT ROUTING */
        this.getAccountStatementUrl = environment_1.environment.apiBaseUrl + "AccountStatementModels/GetAccountStatementModel";
        this.searchAccRecordUrl = environment_1.environment.apiBaseUrl + "AccountStatementModels/searchRecord";
        this.getMarketStatementsUrl = environment_1.environment.apiBaseUrl + "AccountStatementModels/GetSportsMarketStatement";
        this.getLiveCasinoHistoryUrl = environment_1.environment.apiBaseUrl + "AccountStatementModels/getCasinoHistory";
        this.getOverAllPandLUrl = environment_1.environment.apiBaseUrl + "AccountStatementModels/getOverAllPandL";
        this.getFancyPlListUrl = environment_1.environment.apiBaseUrl + "AccountStatementModels/getFancyPlList";
    }
    /*******SIGNUP MODEL API CALLS ********/
    AccountService.prototype.SignIn = function (userIpAddress, signInModel) {
        return this.baseHttpService.Post(this.signInUrl + "?ipAddress=" + userIpAddress, signInModel)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.SignOut = function (userId) {
        return this.baseHttpService.Get(this.signOutUrl + "?userId=" + userId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.changePwd = function (oldPwd, newPwd) {
        return this.baseHttpService.Get(this.changePwdUrl + "?oldPwd=" + oldPwd + "&newPwd=" + newPwd)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.checkIsValid = function (userId) {
        return this.baseHttpService.Get(this.checkIsValidUrl + "?userId=" + userId)
            .then(function (response) {
            return response.json();
        });
    };
    /**********************SIGNUP MODEL API CALLS END ******************************************************************/
    /***********************MARKET MODEL API CALLS *****/
    AccountService.prototype.getMarketList = function (sportsId) {
        return this.baseHttpService.Get(this.getMarketListUrl + "?sportsId=" + sportsId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getCompetitionList = function (sportsId) {
        return this.baseHttpService.Get(this.getCompetitionListUrl + "?sportsId=" + sportsId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getComMarketList = function (seriesId, sportsId) {
        return this.baseHttpService.Get(this.getComMarketListUrl + "?sportsId=" + sportsId + "&seriesId=" + seriesId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getMarketRates = function (marketId, eventId, sportsId) {
        return this.baseHttpService.Get(this.getMarketRatesUrl + "?marketId=" + marketId + "&eventId=" + eventId + "&sportsId=" + sportsId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getMarket = function (marketId, parent_Model) {
        return this.baseHttpService.Post(this.getMarketUrl + "?marketId=" + marketId, parent_Model)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getInplayMarkets = function () {
        return this.baseHttpService.Get(this.getInplayMarketsUrl)
            .then(function (response) {
            return response.json();
        });
    };
    /**********************MARKET MODEL API CALLS END ******************************************************************/
    /***********************SPORTS MODEL API CALLS *****/
    AccountService.prototype.getSports = function () {
        return this.baseHttpService.Get(this.getSportsUrl)
            .then(function (response) {
            return response.json();
        });
    };
    /**********************SPORTS MODEL API CALLS END ******************************************************************/
    /***********************Chip MODEL API CALLS *****/
    AccountService.prototype.getChips = function () {
        return this.baseHttpService.Get(this.getChipsUrl)
            .then(function (response) {
            return response.json();
        });
    };
    /**********************Chip MODEL API CALLS END ******************************************************************/
    /*****************PlaceBet Model API CALLS *******/
    AccountService.prototype.placeBet = function (placeBet) {
        if (placeBet.MarketType == "MATCH_ODDS") {
            return this.baseHttpService.Post(this.placeBetUrl, placeBet)
                .then(function (response) {
                return response.json();
            });
        }
        else {
            return this.baseHttpService.Post(this.placeBetFancyUrl, placeBet)
                .then(function (response) {
                return response.json();
            });
        }
    };
    AccountService.prototype.getAllBetsByUserId = function (marketId) {
        return this.baseHttpService.Get(this.getAllBetsByUserIdUrl + "?marketId=" + marketId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getAllPendingBets = function (skipRec, userId) {
        return this.baseHttpService.Get(this.getAllPendingBetsUrl + "?skipRec=" + skipRec + "&userId=" + userId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getBettingHistory = function (skipRec, userId) {
        return this.baseHttpService.Get(this.getBettingHistoryUrl + "?skipRec=" + skipRec + "&userId=" + userId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getBettingHistoryWithFilters = function (sportsId, skipRec, userId, MarketType) {
        return this.baseHttpService.Get(this.getBettingHistoryWithFiltersUrl + "?sportsId=" + sportsId + "&skipRec=" + skipRec + "&userId=" + userId + "&MarketType=" + MarketType)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getMarketBetsOfUser = function (userId, marketId, role) {
        return this.baseHttpService.Get(this.getMarketBetsOfUserUrl + "?userId=" + userId + "&marketId=" + marketId + "&role=" + role)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getFancyBetsOfUser = function (userId, marketId, role, selectionId) {
        return this.baseHttpService.Get(this.getFancyBetsOfUserUrl + "?userId=" + userId + "&marketId=" + marketId + "&role=" + role + "&selectionId=" + selectionId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getBetsMarketList = function (userId) {
        return this.baseHttpService.Get(this.getBetsMarketListUrl + "?userId=" + userId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getAllMarketBetsOfUser = function (userId, marketId) {
        return this.baseHttpService.Get(this.getAllMarketBetsOfUserUrl + "?userId=" + userId + "&marketId=" + marketId)
            .then(function (response) {
            return response.json();
        });
    };
    /**********************PlaceBet MODEL API CALLS END ******************************************************************/
    /************** AMOUNT MODEL API CALLS */
    AccountService.prototype.getUserBalance = function () {
        return this.baseHttpService.Get(this.getUserBalanceUrl)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getMainWalletBalance = function () {
        return this.baseHttpService.Get(this.getMainWalletBalanceUrl)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.transferBalanceFromMainWalletToCasinoWallet = function (amount, password) {
        return this.baseHttpService.Get(this.transferBalanceFromMainWalletToCasinoWalletUrl + "?points=" + amount + "&password=" + password)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.transferBalanceFromLiveCasinoWalletToMainWallet = function (amount, password) {
        return this.baseHttpService.Get(this.transferBalanceFromLiveCasinoWalletToMainWalletUrl + "?points=" + amount + "&password=" + password)
            .then(function (response) {
            return response.json();
        });
    };
    /**********************Amount MODEL API CALLS END ******************************************************************/
    //***********Profit Loss Model API CALLS ***********/
    AccountService.prototype.getProfitLoss = function (marketId) {
        return this.baseHttpService.Get(this.getProfitLossUrl + "?marketId=" + marketId)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getFancyPandL = function (runnerId, marketId) {
        return this.baseHttpService.Get(this.getFancyPandLUrl + "?selectionId=" + runnerId + "&marketId=" + marketId)
            .then(function (response) {
            return response.json();
        });
    };
    /*********************Profit Loss Model API CALLS END */
    /*******Account Statement Model */
    AccountService.prototype.getAccountStatement = function (id, skipRec, type) {
        return this.baseHttpService.Get(this.getAccountStatementUrl + "?id=" + id + "&skipRec=" + skipRec + "&type=" + type)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.searchAccRecord = function (id, value) {
        return this.baseHttpService.Get(this.searchAccRecordUrl + "?value=" + value + "&id=" + id)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getMarketStatements = function (id, skipRec) {
        return this.baseHttpService.Get(this.getMarketStatementsUrl + "?id=" + id + "&skipRec=" + skipRec)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getLiveCasinoHistory = function (skipRec) {
        return this.baseHttpService.Get(this.getLiveCasinoHistoryUrl + "?skipRec=" + skipRec)
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getOverAllPanDL = function (marketId) {
        return this.baseHttpService.Get(this.getOverAllPandLUrl + "?marketId=" + marketId + "&role=" + localStorage.getItem('ClubRole') + "&userId=" + localStorage.getItem('ClubUserId'))
            .then(function (response) {
            return response.json();
        });
    };
    AccountService.prototype.getFancyPlList = function (marketId) {
        return this.baseHttpService.Get(this.getFancyPlListUrl + "?marketId=" + marketId + "&role=" + localStorage.getItem('ClubRole') + "&userId=" + localStorage.getItem('ClubUserId'))
            .then(function (response) {
            return response.json();
        });
    };
    AccountService = __decorate([
        core_1.Injectable()
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
