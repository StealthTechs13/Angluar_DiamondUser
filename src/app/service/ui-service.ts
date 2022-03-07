import { Injectable, Input } from '@angular/core';


@Injectable()
export class UiService {
    retunData: any = [];
    loader: boolean = false;
    errorMsg: boolean = false;
    sucMsg: boolean = false;
    sportsId: number = 4;
    Message: string = "";
    userId: number = 0;
    creditLimit: number = 100000;
    skipRec: number = 0;
    sportsData: any = [];
    compData: any = [];
    matchData: any = [];
    sportsName: string;
    betslipClass: string;
    showBetSlip: boolean = false;
    balance:number=0;
    LiveBalance:number=0;
    exposure:number=0;
    profitLossData:any=[];
    sportsTitle:string;
    runnerIndex:any=[];
    fancyIndex:any=[];
    chipValue:string;
    openBets:boolean=false;
    maxMatch:string;
    maxFancy:string;
    maxMarket:string;
    setLoader:boolean=false;
    casinoMType:number
    marketBets:any=[];

    /***placebetmodal */
    Price: number;
    Odds: number;
    MarketType: string;
    BetType: string;
    EventId: string;
    SelectionID: string;
    SelectionName: string;
    SportsId: number;
    MarketId: string;
    MarketName: string;
    Stack: number=0;
    ReturnBalance:number;
    Exposure:number;
    BType: string;
    blockCricket:boolean;
    blockFootball:boolean;
    blockTennnis:boolean;
    blockElection:boolean;
    blockCasino:boolean;
    blockVirtual:boolean;
    activeCasinoTab:boolean;
}