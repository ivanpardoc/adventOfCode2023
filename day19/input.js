const inputWorkFlow = [
    "cqh{m>1849:R,A}",
    "zs{a>1909:ql,x<1340:kxd,m>3378:kt,kbt}",
    "sp{a<665:R,s>1356:A,A}",
    "kf{a>1202:rkv,x>2756:A,jnv}",
    "kck{s<1337:pgl,R}",
    "tnp{x<3631:mm,x<3771:qbx,a>1403:kjs,lxf}",
    "vnj{a>2884:fm,a>2424:gg,mgv}",
    "zxv{s<436:R,a>261:A,R}",
    "pjx{s<1500:A,x>2599:R,vg}",
    "pc{s<2563:A,qx}",
    "fv{m<1688:A,A}",
    "zb{m>1561:A,m<1418:A,m>1510:R,A}",
    "ss{x<1970:A,x>2017:R,m<2125:R,A}",
    "zm{x>1228:R,R}",
    "mhp{m<2647:R,a<1979:A,x<288:A,A}",
    "nr{x<884:R,a<1947:ptj,sg}",
    "vh{m>1512:jv,x<994:lr,pgt}",
    "stn{s<3016:qpr,hq}",
    "ktb{x<2371:A,R}",
    "np{s<976:bkp,x>3236:jbl,x<2743:nlp,slc}",
    "ssj{x<2301:cms,lxg}",
    "dnj{x>1620:A,m>1035:A,A}",
    "xj{s>396:qqp,m<2541:hlb,qsl}",
    "nmd{a<2160:A,x<1946:R,A}",
    "cnj{x>320:A,m<382:R,A}",
    "nm{x<1499:A,A}",
    "xnc{a>3633:phz,x<883:bs,R}",
    "fzj{a>1543:hk,m>910:jl,s<211:R,A}",
    "bp{a<3520:hv,s>1344:scf,R}",
    "hjc{a<2654:gz,x>767:vv,lhv}",
    "qz{s<1329:R,ktb}",
    "gzf{a>1805:vvs,s>270:xtc,lx}",
    "qvm{a<475:A,A}",
    "tp{a<1875:dm,x>985:srh,x<802:jnl,zsp}",
    "zq{s>726:R,s<584:R,a<479:R,A}",
    "xl{m<2614:A,a<3274:R,m<3274:R,A}",
    "in{s>1957:tv,zls}",
    "gx{a<2631:clr,A}",
    "gzv{a>1445:cg,ht}",
    "hht{x>1393:khn,a>2195:cjd,xf}",
    "vf{x>3490:A,R}",
    "bz{a<3150:A,x<1283:R,x>1338:R,R}",
    "tcp{s>2645:R,A}",
    "shf{a>3449:A,m<1344:A,x<2754:R,R}",
    "rl{a>3463:R,s>2705:R,m>1573:xh,A}",
    "nk{a<1561:nff,s<244:snv,dd}",
    "zj{m<2629:R,R}",
    "hqq{s<1218:A,a<2865:hsq,s>1590:R,zg}",
    "dh{a<142:R,m<1706:pzf,lnb}",
    "jzp{m<3335:A,ckp}",
    "xz{a>3623:R,R}",
    "rc{x<272:A,A}",
    "mls{a>2255:A,m<3473:R,R}",
    "gl{a>661:A,a<297:R,x>604:R,R}",
    "fsb{m<346:A,m>520:R,a<1609:R,R}",
    "ptl{x>904:rd,x>863:rsq,a>2356:qdm,fv}",
    "vb{x<157:R,s<88:A,s>125:R,R}",
    "dzj{m<1110:R,s<864:R,m<1359:A,R}",
    "vgf{x>1377:A,R}",
    "pk{a>3637:R,a<3421:R,m<649:A,R}",
    "sbb{s<732:R,s>864:A,A}",
    "lpp{m>1116:A,m>914:A,s>442:R,R}",
    "br{m<3228:R,m>3557:A,s>1588:R,R}",
    "zls{x>2211:np,s<727:nqg,x>1092:pl,hgk}",
    "bkp{m>1445:ckq,x>2982:gbh,a<2618:fz,bq}",
    "lv{a<1050:R,x>1991:A,R}",
    "pgt{x<1139:nrr,a<2036:rs,qv}",
    "rsq{x>890:A,a>2384:R,s<2459:A,A}",
    "lx{m>1867:krg,m<856:fx,qp}",
    "lk{x<3205:A,a>2637:gp,x>3571:sq,nj}",
    "kkx{m<3287:R,R}",
    "lpc{x<1258:gtp,m<2505:dl,s<1541:vrv,qm}",
    "pfr{x>242:A,R}",
    "xd{x>637:R,A}",
    "dgb{m<2887:A,m<3160:R,s<507:tlj,cl}",
    "sz{a>2480:R,x<1077:A,m>369:A,R}",
    "zt{a<2249:R,s>1173:R,s>1055:rt,jvj}",
    "mjc{s>417:A,nbk}",
    "vdz{a<2968:A,x>618:A,a>3118:A,R}",
    "hjd{x<3042:A,a<479:A,s<1182:A,R}",
    "fk{x>170:tlm,R}",
    "jt{a<1904:A,A}",
    "cm{m>2053:A,A}",
    "pbc{x>2064:A,s>1335:A,x<2057:A,R}",
    "jtn{m<3595:R,a<2443:dt,R}",
    "fdr{x<170:zrm,zss}",
    "qx{m<1330:R,A}",
    "zvl{x>1154:A,a>3086:A,R}",
    "xtc{m<2363:jxs,m<3368:dgb,m>3777:pgq,phq}",
    "rjk{x>2343:R,R}",
    "hn{s<2971:bph,m<1962:fl,zz}",
    "gg{x<756:R,s<2434:A,A}",
    "tps{a>2539:A,A}",
    "tj{x>3769:A,a<2474:A,a>3050:A,A}",
    "jgb{x>1394:vth,x>1340:R,a<2466:xsk,A}",
    "txq{m<3293:A,m<3736:A,R}",
    "srv{s<1686:R,a>934:R,x<1159:A,R}",
    "dg{x>3478:R,td}",
    "bs{m<1413:R,m<2741:R,R}",
    "hv{a>3019:A,m>230:R,a>2889:R,R}",
    "qct{x<2515:ttz,x<2620:R,tbd}",
    "bph{m>1692:R,a<1706:A,s>2455:bdt,bhf}",
    "xnp{a<2896:A,a>3434:ck,s>567:kgk,A}",
    "zk{a>1220:R,m>2395:A,R}",
    "nvj{x<2973:kbn,s<1742:vzv,R}",
    "ndk{s>1154:R,s>893:A,s>831:A,A}",
    "hkv{x>1420:R,m>389:A,A}",
    "xxn{s>3361:htx,a>2268:A,R}",
    "rr{s>2668:R,A}",
    "jl{m<1582:A,m<2069:R,s<244:R,A}",
    "fd{a>407:R,R}",
    "rs{x>1258:vhq,a>1007:txn,R}",
    "xm{a>3738:R,s>2755:A,A}",
    "vzv{a>984:A,A}",
    "hk{x<1994:A,A}",
    "mfm{m<1032:hkv,a<1959:cf,x>1399:R,jb}",
    "smq{m<194:R,a<3282:R,R}",
    "hjx{s<1617:R,a<3296:R,R}",
    "jrq{m>1955:A,R}",
    "vg{x>2575:R,R}",
    "jj{s<780:R,R}",
    "vkf{m<1743:R,s>3082:A,a>95:R,R}",
    "msf{a<2067:rqq,A}",
    "mvk{x>922:dj,R}",
    "rms{m>2987:grm,x>223:qdp,a>473:ml,kr}",
    "cb{m>3701:cht,m>3491:jtn,s<3267:klg,smk}",
    "sd{a<2635:hvd,vj}",
    "tmm{x<2059:R,A}",
    "xxh{m>2915:R,xt}",
    "xkg{s>1039:A,R}",
    "zf{s>453:A,A}",
    "njl{a<1805:R,mtf}",
    "zkn{m<3512:thg,s>1158:R,a<2484:R,R}",
    "nh{m>2463:A,s<1228:tg,x>1940:jlj,pmk}",
    "png{x>1162:R,m<571:ltg,A}",
    "lzs{s<580:A,s<663:R,A}",
    "tqf{s<144:hnl,R}",
    "dfs{s<228:A,s>246:A,m>567:R,A}",
    "pbd{m>784:A,m<522:R,x<607:A,R}",
    "snv{a>3181:A,s<83:R,zm}",
    "kgk{s<662:A,a<3145:A,A}",
    "lkn{x>3048:R,x<2937:A,R}",
    "fc{s<1346:R,s<1666:nmd,ss}",
    "nlp{m<1429:gq,a<2208:kp,rmx}",
    "zp{m>405:A,s<2848:A,m<159:R,R}",
    "vs{s<3820:R,m<3596:R,A}",
    "pf{m>3426:A,x<759:A,m<3114:A,A}",
    "xqq{a>2142:gn,m>2425:kkx,nvj}",
    "nvg{a<2121:R,x<981:R,m<2849:A,A}",
    "ckq{a>2161:dff,ktx}",
    "mlb{a<955:A,x>425:R,a>1165:A,A}",
    "dfm{a<678:R,m<1355:A,R}",
    "xn{s>224:R,R}",
    "hm{m<3125:A,R}",
    "pzf{s>2736:A,A}",
    "jtc{x<3066:stl,A}",
    "kxd{s<3843:vjf,m>3231:vzd,x>546:cgf,A}",
    "bdt{a>2680:R,R}",
    "vm{s<2777:A,s>2916:R,m<1063:zp,jrq}",
    "pq{a>2418:zrk,a<958:fkr,a>1923:fc,nh}",
    "pvl{a<1684:jtm,dpr}",
    "zrm{s<1037:R,m>3099:R,R}",
    "mdx{x<2534:R,s>1409:R,s>1161:R,R}",
    "ql{a>3241:R,x>2544:nqj,a>2628:A,ljk}",
    "mc{a>2835:A,s>2670:A,A}",
    "svp{s<1194:R,a>1519:R,m>2815:A,srv}",
    "pql{m<3552:A,R}",
    "lxf{x<3868:cqh,s>1665:qdj,x>3947:cm,shz}",
    "brn{x<1064:dcz,m>1683:nk,gqn}",
    "qdp{x>346:R,a<436:A,R}",
    "xb{a>2683:R,m<2188:A,a>2438:A,R}",
    "jz{s<2926:A,a<782:R,R}",
    "ch{s>953:A,A}",
    "ptj{x<933:A,m>636:R,a>1087:A,A}",
    "clr{s>2740:R,s>2233:A,R}",
    "vqk{s<1332:xl,x<2703:hjx,m>2989:R,A}",
    "thg{m>3370:R,s>1286:R,m>3250:A,R}",
    "bjl{a>1210:R,A}",
    "vj{m<1940:R,R}",
    "prj{x<200:R,s>994:A,R}",
    "qdj{x<3938:R,x<3968:R,a>870:A,A}",
    "cgf{a<906:R,s>3921:A,A}",
    "hgk{x<476:vfd,sdh}",
    "ngd{x<1982:A,a>620:A,m<2486:R,R}",
    "vx{a>334:R,x<474:xq,a>158:A,A}",
    "xf{s>1642:R,x<1323:A,R}",
    "xzp{x>311:R,R}",
    "njm{x>1880:R,a<3319:A,m>1329:R,A}",
    "zz{a>2616:A,x>164:R,zk}",
    "nd{x<2080:pbc,m<2049:rvb,a>3279:xc,R}",
    "qg{a>1460:A,R}",
    "vvs{s>476:xnp,s>302:mjc,x<338:pj,ttp}",
    "nkj{m<2932:R,A}",
    "bj{a<2598:R,s>2994:A,A}",
    "xfs{s<1908:R,x<911:R,m<785:A,R}",
    "kh{s<3211:A,s>3474:R,a>1156:htz,R}",
    "jmk{m<889:A,a>3482:A,x<227:A,A}",
    "vr{m<1392:R,s>1268:A,R}",
    "nqb{m<336:A,A}",
    "bsq{x>2108:sds,a>1846:nd,x<2074:tq,sxr}",
    "qb{x>1971:dc,xxh}",
    "pl{x<1466:lpc,gmk}",
    "gxv{s<480:R,x>1082:A,A}",
    "dxk{x<950:R,s>2625:R,x>967:R,A}",
    "qrr{m>1685:hx,s<2653:R,jz}",
    "tvk{a>1391:A,m>566:A,s>554:R,R}",
    "sb{x<1881:A,a<939:fd,m<3131:R,lzs}",
    "gvz{s<3188:R,s>3633:nqb,x<1763:jq,lq}",
    "xr{m>1097:A,a>1258:A,x>535:A,R}",
    "zsq{s<2601:pf,x<615:A,a>3233:xm,R}",
    "pmv{m>796:R,a<610:prv,mdx}",
    "gs{m>1007:A,s<462:R,R}",
    "vv{s<1330:A,s<1743:gpn,s<1839:kdq,xfs}",
    "qqp{a>2612:dds,m<2536:lxn,sb}",
    "cdf{m>1757:R,s>2842:A,m>1647:A,R}",
    "cg{m<1137:tps,a<2714:lkn,x<3032:zb,R}",
    "dm{a>1076:qg,a<423:dh,qrr}",
    "pbn{m>253:R,x<1107:R,s<203:R,A}",
    "phq{a>755:pql,A}",
    "czk{s>281:A,A}",
    "prs{m>2533:bf,a>3389:R,s<1343:db,R}",
    "td{x<3266:R,R}",
    "jpc{x<3729:A,x>3830:R,s<2843:A,R}",
    "stl{a>2315:A,s>1415:A,m<2946:R,R}",
    "ds{m<3188:hsg,zkn}",
    "nqg{x>1400:xj,x>711:brn,gzf}",
    "cms{s>2105:A,hm}",
    "pg{s<1430:kd,A}",
    "zsp{a>2971:lgb,a>2468:mvk,a>2239:ptl,vm}",
    "xdx{a>528:A,m<1527:kz,x<1628:A,A}",
    "zh{m>1731:rr,m<1283:qf,m<1467:R,bj}",
    "lfr{a>1128:xzp,R}",
    "th{a>843:lfr,s>1463:hnb,s>1042:rth,sgm}",
    "ms{m>2316:bgr,s<1139:jmk,x<240:R,A}",
    "xlp{x<2479:kh,a>699:cpn,a>248:dvn,xjz}",
    "sv{x<481:mlb,a>1000:xng,gl}",
    "gbg{s<408:hqf,jj}",
    "qt{x>194:R,R}",
    "hp{a>966:A,x>1290:R,a<422:R,A}",
    "xc{s<1538:R,m>2811:R,s>1711:A,R}",
    "jnv{m<519:A,a<721:R,A}",
    "pgl{x<2400:A,a<1466:R,R}",
    "cpn{x>3417:R,tkm}",
    "dz{m<948:mk,x<328:hn,lt}",
    "xng{a>1222:R,R}",
    "hx{s<2470:A,a>776:R,A}",
    "srh{x<1202:pc,sjc}",
    "lnb{x<932:A,m>2319:R,A}",
    "xs{s<3530:R,a>402:A,A}",
    "gpn{x>922:R,a>3449:A,x>839:A,R}",
    "ttz{s>1449:R,s>1256:R,a>3372:A,R}",
    "sdh{m<2098:hjc,ds}",
    "ptg{m<1800:A,a>3375:R,s>450:A,A}",
    "dt{s<3323:A,a<1278:R,A}",
    "lxn{m>1281:R,s>536:gxn,s<468:R,vcp}",
    "lhv{a<3237:vdz,a<3550:pbd,A}",
    "krg{a<1012:R,x<405:jnk,A}",
    "gp{a>3394:A,A}",
    "rvb{a<3145:R,a<3639:A,R}",
    "tjc{a>2154:A,a<995:zq,sbb}",
    "vhq{s<3713:R,s<3811:A,R}",
    "hvd{m<2486:R,a<2454:R,s>1188:A,A}",
    "jvj{a>3098:R,m<2985:R,x>3093:A,A}",
    "xq{s>3200:A,R}",
    "kz{a>206:A,x<1602:A,A}",
    "fkr{s>1178:rqp,m>1684:ngd,s>940:nc,dzj}",
    "rv{s<3916:A,x>2062:R,x<1939:R,A}",
    "kbn{x<2874:R,x<2921:R,m>1259:A,R}",
    "rt{a>3166:R,m>3250:R,R}",
    "nrr{m>747:bfc,x>1046:R,x>1023:mb,hxf}",
    "js{s>2620:R,a>2007:A,lv}",
    "lpb{m>1348:A,s<625:R,A}",
    "gtp{m>1915:svp,xbg}",
    "xp{a>1571:R,A}",
    "dff{m>2559:A,m<2049:R,m>2292:zf,bd}",
    "rmx{x<2553:qz,x>2678:vqk,pjx}",
    "vfd{a>1568:spp,m<1767:th,s<1319:fdr,blm}",
    "nqj{s>3777:A,s>3673:A,R}",
    "kd{m<2651:A,A}",
    "sgm{a>342:qt,s<902:bfl,s>974:A,A}",
    "sxr{m>2172:R,hsv}",
    "sq{s>2682:R,m>3803:R,x<3716:R,R}",
    "tf{m<2857:R,x>2020:A,A}",
    "jv{a>2378:dq,sx}",
    "hsq{s<1508:A,x>1701:R,R}",
    "nj{m<3687:R,a>1009:A,x<3441:A,A}",
    "zzx{x<1621:A,x>1774:A,s>175:R,A}",
    "rh{x>313:R,m>1071:R,A}",
    "sk{x<1284:A,x>1314:R,a<3785:R,R}",
    "mn{s>2659:A,A}",
    "ttp{s>165:mz,A}",
    "jml{m>1947:R,a>2659:A,A}",
    "cch{x<109:gd,x<196:R,R}",
    "dds{s<547:ptg,A}",
    "hnl{s>85:A,a<3120:R,a<3626:R,A}",
    "gck{m<1499:R,A}",
    "phz{x>926:R,s>383:R,a<3874:A,A}",
    "vsf{m>1197:R,R}",
    "bc{m<820:A,R}",
    "thc{x>3440:R,A}",
    "trh{a<3765:xz,x<2813:R,A}",
    "grm{x<241:R,R}",
    "ljk{x<1132:R,A}",
    "gpr{s<404:A,s<594:xb,R}",
    "vjf{s>3678:R,R}",
    "rrd{x>1386:A,a>1016:R,a>571:R,R}",
    "kbt{x>2381:bjl,s<3792:A,x<1720:A,rv}",
    "qbs{x<1104:sz,x>1112:fsb,s<312:pbn,bg}",
    "htz{x>1939:R,a>1496:A,A}",
    "ft{x>1366:dnz,x<710:dz,s<3187:tp,vh}",
    "qpr{x<1446:nbc,s<2323:ssj,tc}",
    "zfp{a>1044:R,s<2040:R,m>2904:R,R}",
    "jn{m>657:A,s>1507:R,R}",
    "hhl{s<1408:A,a>451:R,R}",
    "tkm{x>2963:A,a<1341:R,A}",
    "lvf{x>561:kc,m>3525:A,xp}",
    "stf{m>1450:A,s>3054:A,R}",
    "mft{x<1216:A,m<3127:R,m<3477:R,A}",
    "xgn{a<2241:R,a>2481:A,A}",
    "jbl{s>1406:tnp,cj}",
    "mm{s<1762:vf,a>1580:R,m<2202:R,nkj}",
    "jb{x<1383:A,x<1390:R,R}",
    "lxg{s>2147:R,m>3127:qk,a>2612:R,zfp}",
    "rp{s>1327:R,fj}",
    "jq{x<1598:R,a>2707:A,s>3379:R,A}",
    "lp{x<1707:nm,m>2005:R,m<1558:njm,tcp}",
    "xjz{x>2990:vkf,mbm}",
    "bf{m<3420:A,R}",
    "gk{a<3118:zzx,R}",
    "fxd{x<2267:vsf,a<2779:A,fh}",
    "cl{a<1085:R,A}",
    "vzd{s<3937:R,R}",
    "cgk{a<2582:A,jpc}",
    "zr{x>3587:tj,m>1836:kx,xkg}",
    "nff{m<2643:R,s<396:mft,s<566:txq,mq}",
    "nbg{x<2377:R,m<136:R,R}",
    "kr{m<2449:R,x<81:A,R}",
    "xsk{x<1296:A,m<3176:A,A}",
    "sds{a>1522:R,x>2154:qbr,vr}",
    "jxs{s<453:A,m>1053:R,a>1121:tvk,A}",
    "bfc{x<1068:R,a>2463:A,R}",
    "pmk{m>1124:A,A}",
    "cf{x<1390:R,m>1278:R,R}",
    "klg{m<3284:pz,A}",
    "mgv{a<2150:R,x<760:R,a<2269:A,A}",
    "fhg{m>762:R,x>2348:R,a<3237:R,A}",
    "qp{m<1438:rh,pfr}",
    "zhm{m>292:R,m>121:kq,a>1833:R,A}",
    "rd{m<1296:A,x<940:A,x>969:R,A}",
    "tq{m<1442:R,m<3017:A,m<3652:R,tmm}",
    "vcp{x<1921:R,s>512:R,s<495:R,R}",
    "pnq{x>3852:A,m>1774:A,x>3724:R,A}",
    "bhf{x>218:A,s<2239:R,A}",
    "bls{m>1957:A,s<2577:A,x<770:cdf,A}",
    "mtf{a>3150:R,a>2528:R,A}",
    "rkv{m>778:R,A}",
    "dpr{m>552:R,m>259:A,a>2918:A,A}",
    "smk{x>1577:R,m>3242:gnn,s>3395:R,R}",
    "vth{m<3431:A,R}",
    "dcz{a<2168:czk,a>3385:xnc,x>889:gpr,nmv}",
    "pqs{x<2970:bnd,s<1347:zt,jtc}",
    "hlb{x>1866:fzj,a>1466:gk,xdx}",
    "prv{x<2429:A,x<2574:R,R}",
    "rq{m<3913:A,a<1087:R,R}",
    "mq{s>627:R,x>1212:A,a>538:A,A}",
    "kq{m>209:R,m<167:A,A}",
    "bfl{s>810:A,R}",
    "qdm{m>1189:A,R}",
    "tbd{s<1325:A,R}",
    "lc{a<1274:R,A}",
    "lt{a>1572:zh,m>1604:sv,a>984:vl,vx}",
    "nt{m<3894:R,A}",
    "vxd{s>3177:A,A}",
    "dnz{a<2029:xlp,x<2628:snc,a>3341:qcl,vms}",
    "vrf{x<2829:A,R}",
    "crd{x>3557:pnq,thc}",
    "fz{x>2529:kf,m<769:vn,xtd}",
    "pdx{a<2185:zgt,hqq}",
    "cp{m>2598:A,A}",
    "fl{x>133:A,m<1491:rm,s>3519:R,A}",
    "pz{x>2347:R,m<3192:R,A}",
    "tg{m>1371:A,m<663:R,R}",
    "ggv{s<527:shf,s<710:lpb,R}",
    "fj{s<1287:R,s<1302:A,s<1312:R,A}",
    "kt{x<2253:R,a>1220:vs,R}",
    "ht{a<781:hjd,xv}",
    "xh{s<2309:R,a<3410:R,R}",
    "qcl{x<3100:trh,a>3564:vxd,rl}",
    "nbk{x>377:A,a<2893:R,s<365:A,A}",
    "bnd{x>2843:A,x<2800:R,a>1769:kbb,cp}",
    "hnb{m<805:rc,x>232:gt,A}",
    "rm{m>1185:A,A}",
    "fb{a<2398:A,s<3218:A,m>2850:A,R}",
    "sx{x<1030:A,a<1219:A,x>1218:R,R}",
    "bd{a>2890:A,a<2425:R,x>3323:A,A}",
    "gmk{x<1864:pdx,x<2051:pq,bsq}",
    "jlj{x<1982:R,s<1665:R,m<1026:A,A}",
    "srb{a>2656:A,m>3514:R,a>1728:A,R}",
    "cz{x>3027:A,A}",
    "dvn{x<3341:cz,s<3231:A,xs}",
    "hxf{s>3637:A,m<448:R,R}",
    "qv{x>1236:A,a<3189:R,pk}",
    "kx{m>3217:R,R}",
    "gz{x>822:R,a<1663:dfm,xd}",
    "gn{a<3047:R,R}",
    "gt{m<1156:R,m>1548:R,a>430:A,R}",
    "vzr{m<3451:tf,a<1010:A,x>2004:A,R}",
    "qf{a<2801:A,R}",
    "hsg{m<2529:hrv,x<807:R,nvg}",
    "cht{x>2198:nt,R}",
    "bq{x<2523:gm,m<700:gbg,m<1162:gs,ggv}",
    "prc{m>1205:A,x<3047:vrf,m<630:R,mc}",
    "gd{s>2846:R,m>424:R,A}",
    "cjd{m<3360:R,m>3770:R,A}",
    "qbx{m<2515:drv,x>3685:mls,s<1770:A,R}",
    "vn{m<337:nbg,m>551:dcc,A}",
    "ck{m<1618:A,m<2476:R,m>3165:A,R}",
    "db{a>2890:A,s<1308:A,s<1323:A,R}",
    "snc{x>1978:fxd,m>952:lp,gvz}",
    "qsl{x<1835:jzp,a<2179:vzr,tqf}",
    "rqq{m<2027:R,x<1384:A,s>1764:A,R}",
    "gxn{s>635:A,a>1262:R,x<1802:A,R}",
    "cj{s<1125:zr,s<1257:crd,a<2537:rp,prs}",
    "lq{x>1836:R,a>3311:A,a<2551:A,A}",
    "qzs{x<1384:A,x<1417:A,A}",
    "spp{a>2881:ms,a>2360:sd,mhp}",
    "ld{m>1052:lbq,a>1810:R,hp}",
    "qk{s<2064:R,s>2098:A,x>3155:A,A}",
    "hqf{x<2810:R,x>2881:R,a<3335:R,A}",
    "txn{m<515:R,s<3547:A,R}",
    "shz{m<2662:A,m<3548:R,R}",
    "nbc{a>2381:zsq,lvf}",
    "xtd{x<2377:lpp,R}",
    "zg{s<1442:R,A}",
    "lxq{a>1722:R,s<1419:sp,A}",
    "ktx{m<2642:A,x<3186:R,s<439:lc,R}",
    "jnk{x>241:R,x<86:A,A}",
    "dl{s<1389:mj,m>1577:msf,x>1351:mfm,zqh}",
    "kp{x<2526:kck,pg}",
    "vrv{s<1238:csj,m>3267:srb,lxq}",
    "tlm{m>2678:R,m<2159:A,A}",
    "hrv{s<1266:R,s>1543:R,R}",
    "fmk{s>595:R,a>2979:A,m<3119:R,R}",
    "zgt{m>2441:ndk,a<782:hhl,a>1406:R,dnj}",
    "gm{m<489:smq,m<988:fhg,rjk}",
    "blm{a>858:br,s>1664:rms,fk}",
    "dcc{a>1715:A,s>543:A,m<624:R,A}",
    "lr{s>3670:nr,xxn}",
    "mj{s>1107:A,s<971:qzs,A}",
    "mz{m>2390:R,x<556:R,R}",
    "mb{a>2399:A,A}",
    "kjs{m>1519:zj,R}",
    "sg{a<3129:A,m<764:R,m<1260:R,A}",
    "dc{x>3285:A,fb}",
    "zqh{x>1305:A,jt}",
    "kbb{x>2822:A,A}",
    "rqp{s<1487:R,m>2233:A,A}",
    "vms{x<3479:prc,m>1779:gx,cgk}",
    "kdq{x>936:A,A}",
    "pgq{a>726:rq,s<564:zxv,s>670:pfq,A}",
    "dq{a>3308:R,x<1086:R,a<2892:jml,A}",
    "ltg{m>283:R,a>1543:R,R}",
    "rth{m<769:qvm,x>198:A,x>107:A,sj}",
    "bg{a<2443:A,s<530:R,m>366:A,R}",
    "kc{x<1050:A,R}",
    "dd{x>1210:R,a>2724:A,R}",
    "fh{s>2664:A,m<1476:A,a>3397:A,R}",
    "lgb{x>890:dxk,A}",
    "jnl{m>1532:bls,vnj}",
    "gnn{s<3393:A,s>3450:A,x<643:A,A}",
    "jtm{m>383:R,x>3159:R,R}",
    "hq{s>3559:zs,m<3117:qb,cb}",
    "nmv{a<2742:blb,s<338:R,m>2532:fmk,R}",
    "hsv{m<1102:R,a<641:A,a>1237:R,A}",
    "csj{a>2052:vgf,x<1327:ch,rrd}",
    "drv{s<1770:R,s<1861:R,s>1895:R,R}",
    "bgr{s<1472:R,m>3076:A,A}",
    "lbq{m<1314:R,x>1323:R,R}",
    "vl{m>1211:stf,xr}",
    "xv{m>760:A,R}",
    "fm{x<755:A,R}",
    "kjv{x>215:R,x>187:R,A}",
    "pfq{m<3899:A,s>695:A,A}",
    "gbh{s>420:tjc,m>867:dg,x>3474:zhm,pvl}",
    "ml{m<2527:A,m>2768:R,a>618:R,A}",
    "htx{a<1562:A,x<845:R,A}",
    "ckp{x>1638:R,s<152:A,R}",
    "tv{m>2668:stn,ft}",
    "pj{s>146:xn,vb}",
    "slc{s>1536:xqq,m>1881:pqs,gzv}",
    "zrk{a>3081:gck,A}",
    "xgb{x>1096:A,gxv}",
    "qbr{s<1438:A,m>1436:R,m<750:A,R}",
    "gq{a<1449:pmv,a<2656:cgs,m>522:qct,bp}",
    "mk{x>293:mn,cch}",
    "gqn{x>1195:ld,x>1126:png,m<679:qbs,xgb}",
    "sj{a<314:A,a>578:R,x<55:A,R}",
    "fx{s>163:dfs,a>898:A,cnj}",
    "xbg{a<1791:bc,x>1166:R,x<1141:jn,zvl}",
    "sjc{a<2847:R,a>3361:sk,m>931:R,bz}",
    "qm{s>1778:jgb,hht}",
    "xt{s<3374:A,m>2783:R,x<678:R,R}",
    "tlj{m<3283:R,s<406:A,R}",
    "nc{a>357:R,a>141:R,s<1071:R,A}",
    "tc{x<2724:js,m<3426:njl,lk}",
    "zss{x>278:A,a<663:kjv,x>242:A,prj}",
    "blb{a>2363:R,s>460:R,A}",
    "scf{m<219:R,x>2548:A,m>324:A,A}",
    "dj{x<951:A,m<1084:A,x>963:A,R}",
    "khn{m>3298:A,A}",
    "mbm{s>3117:A,a<153:A,A}",
    "cgs{x<2412:qh,xgn}",
    "qh{x<2315:R,x>2377:A,A}",
  ];
  
  const inputParts = [
    "{x=1509,m=1127,a=482,s=1803}",
    "{x=24,m=718,a=2879,s=978}",
    "{x=211,m=1442,a=507,s=128}",
    "{x=47,m=2266,a=1663,s=357}",
    "{x=461,m=5,a=718,s=1969}",
    "{x=184,m=414,a=1810,s=2958}",
    "{x=754,m=521,a=41,s=2007}",
    "{x=296,m=1438,a=18,s=1013}",
    "{x=374,m=2888,a=234,s=797}",
    "{x=1540,m=1164,a=3,s=26}",
    "{x=1586,m=2318,a=1125,s=901}",
    "{x=2243,m=1165,a=300,s=166}",
    "{x=413,m=230,a=1284,s=101}",
    "{x=816,m=1394,a=978,s=1190}",
    "{x=813,m=2503,a=1809,s=640}",
    "{x=439,m=1792,a=1540,s=287}",
    "{x=237,m=2782,a=9,s=668}",
    "{x=2142,m=1746,a=407,s=1855}",
    "{x=1562,m=767,a=808,s=286}",
    "{x=1410,m=268,a=163,s=971}",
    "{x=255,m=548,a=1947,s=216}",
    "{x=399,m=2458,a=1068,s=124}",
    "{x=288,m=1284,a=174,s=597}",
    "{x=933,m=697,a=310,s=173}",
    "{x=1676,m=207,a=1084,s=80}",
    "{x=1169,m=2438,a=226,s=919}",
    "{x=387,m=1275,a=839,s=465}",
    "{x=2757,m=100,a=2508,s=742}",
    "{x=762,m=1067,a=372,s=253}",
    "{x=495,m=423,a=443,s=838}",
    "{x=239,m=3028,a=214,s=2055}",
    "{x=150,m=1025,a=97,s=3859}",
    "{x=1072,m=503,a=517,s=1973}",
    "{x=127,m=580,a=218,s=852}",
    "{x=1740,m=904,a=409,s=1214}",
    "{x=164,m=2719,a=1951,s=339}",
    "{x=334,m=45,a=1729,s=832}",
    "{x=37,m=1776,a=118,s=1360}",
    "{x=1223,m=486,a=168,s=680}",
    "{x=1593,m=266,a=51,s=112}",
    "{x=432,m=787,a=199,s=669}",
    "{x=2,m=1196,a=500,s=823}",
    "{x=386,m=567,a=728,s=459}",
    "{x=2343,m=3452,a=199,s=749}",
    "{x=604,m=272,a=529,s=3335}",
    "{x=154,m=253,a=668,s=384}",
    "{x=224,m=98,a=1345,s=948}",
    "{x=145,m=1309,a=148,s=984}",
    "{x=1872,m=1653,a=1716,s=692}",
    "{x=3015,m=119,a=101,s=890}",
    "{x=807,m=436,a=851,s=274}",
    "{x=593,m=1025,a=431,s=1243}",
    "{x=1607,m=275,a=1824,s=117}",
    "{x=398,m=567,a=914,s=440}",
    "{x=1606,m=33,a=46,s=402}",
    "{x=1183,m=1444,a=645,s=276}",
    "{x=125,m=248,a=86,s=2534}",
    "{x=3374,m=71,a=37,s=884}",
    "{x=810,m=255,a=819,s=1449}",
    "{x=1592,m=2102,a=1264,s=2117}",
    "{x=1998,m=1917,a=912,s=438}",
    "{x=1057,m=2932,a=939,s=843}",
    "{x=837,m=2185,a=1746,s=680}",
    "{x=211,m=2513,a=596,s=1437}",
    "{x=2265,m=35,a=778,s=3172}",
    "{x=2574,m=1963,a=73,s=836}",
    "{x=893,m=1770,a=714,s=325}",
    "{x=387,m=147,a=81,s=314}",
    "{x=2109,m=146,a=1650,s=1625}",
    "{x=2318,m=800,a=1790,s=358}",
    "{x=447,m=1497,a=1356,s=2604}",
    "{x=1022,m=1118,a=590,s=1464}",
    "{x=64,m=3472,a=3359,s=2289}",
    "{x=697,m=735,a=2306,s=603}",
    "{x=828,m=23,a=1165,s=1411}",
    "{x=3615,m=463,a=328,s=969}",
    "{x=3499,m=336,a=600,s=680}",
    "{x=32,m=39,a=602,s=1528}",
    "{x=21,m=2171,a=76,s=3824}",
    "{x=1252,m=329,a=1989,s=1352}",
    "{x=564,m=359,a=161,s=2211}",
    "{x=2280,m=1449,a=914,s=304}",
    "{x=821,m=1014,a=2535,s=700}",
    "{x=1507,m=2523,a=102,s=406}",
    "{x=1138,m=36,a=1011,s=413}",
    "{x=333,m=92,a=424,s=1182}",
    "{x=399,m=995,a=445,s=410}",
    "{x=1131,m=78,a=777,s=1441}",
    "{x=406,m=1665,a=2355,s=18}",
    "{x=791,m=115,a=299,s=1460}",
    "{x=721,m=3651,a=242,s=408}",
    "{x=152,m=228,a=31,s=867}",
    "{x=311,m=560,a=127,s=1385}",
    "{x=414,m=1281,a=259,s=429}",
    "{x=53,m=973,a=2397,s=438}",
    "{x=388,m=106,a=1159,s=1170}",
    "{x=272,m=1267,a=2995,s=203}",
    "{x=1165,m=629,a=1135,s=102}",
    "{x=739,m=2903,a=1458,s=56}",
    "{x=484,m=2172,a=2249,s=117}",
    "{x=1325,m=741,a=2516,s=543}",
    "{x=458,m=57,a=606,s=331}",
    "{x=1447,m=792,a=591,s=724}",
    "{x=1219,m=1192,a=173,s=602}",
    "{x=667,m=80,a=764,s=2201}",
    "{x=2729,m=1465,a=447,s=1598}",
    "{x=594,m=8,a=503,s=569}",
    "{x=846,m=2072,a=57,s=1122}",
    "{x=120,m=1390,a=100,s=27}",
    "{x=111,m=2718,a=158,s=1095}",
    "{x=26,m=741,a=82,s=194}",
    "{x=268,m=64,a=678,s=2474}",
    "{x=404,m=207,a=960,s=215}",
    "{x=3014,m=297,a=853,s=145}",
    "{x=1224,m=274,a=179,s=589}",
    "{x=160,m=1842,a=2384,s=69}",
    "{x=508,m=237,a=141,s=71}",
    "{x=3797,m=2478,a=1134,s=70}",
    "{x=28,m=3289,a=1711,s=607}",
    "{x=1272,m=521,a=1221,s=228}",
    "{x=264,m=2596,a=3321,s=1066}",
    "{x=873,m=637,a=410,s=2601}",
    "{x=2133,m=440,a=442,s=432}",
    "{x=1553,m=108,a=1675,s=118}",
    "{x=2374,m=236,a=2233,s=497}",
    "{x=2378,m=197,a=178,s=1966}",
    "{x=601,m=1589,a=2241,s=2551}",
    "{x=1294,m=2663,a=489,s=1752}",
    "{x=155,m=2493,a=83,s=208}",
    "{x=317,m=1440,a=1396,s=514}",
    "{x=1654,m=1919,a=26,s=1232}",
    "{x=1430,m=539,a=1089,s=1259}",
    "{x=642,m=1163,a=476,s=631}",
    "{x=1379,m=5,a=48,s=642}",
    "{x=2749,m=2562,a=2822,s=1541}",
    "{x=1536,m=225,a=367,s=739}",
    "{x=150,m=173,a=395,s=110}",
    "{x=467,m=1035,a=255,s=1451}",
    "{x=44,m=1085,a=843,s=729}",
    "{x=48,m=579,a=70,s=852}",
    "{x=50,m=84,a=4,s=1250}",
    "{x=3128,m=1013,a=3367,s=479}",
    "{x=345,m=1286,a=695,s=3472}",
    "{x=57,m=1376,a=1786,s=815}",
    "{x=1998,m=654,a=179,s=376}",
    "{x=1469,m=1252,a=677,s=1839}",
    "{x=1157,m=31,a=625,s=2022}",
    "{x=1263,m=2576,a=538,s=909}",
    "{x=168,m=462,a=2268,s=1809}",
    "{x=1206,m=1152,a=2370,s=1918}",
    "{x=131,m=207,a=2124,s=956}",
    "{x=1826,m=39,a=144,s=651}",
    "{x=503,m=65,a=142,s=1246}",
    "{x=101,m=626,a=1261,s=414}",
    "{x=2453,m=333,a=968,s=198}",
    "{x=280,m=466,a=1607,s=773}",
    "{x=3177,m=531,a=579,s=76}",
    "{x=838,m=386,a=144,s=607}",
    "{x=1516,m=574,a=329,s=214}",
    "{x=404,m=2017,a=2317,s=654}",
    "{x=2698,m=2050,a=10,s=1956}",
    "{x=1004,m=3340,a=2190,s=768}",
    "{x=777,m=2294,a=845,s=1058}",
    "{x=402,m=796,a=820,s=3105}",
    "{x=568,m=169,a=40,s=133}",
    "{x=454,m=1910,a=496,s=8}",
    "{x=27,m=123,a=2739,s=30}",
    "{x=2090,m=795,a=167,s=1506}",
    "{x=1854,m=74,a=308,s=252}",
    "{x=990,m=1048,a=2142,s=1317}",
    "{x=36,m=196,a=3199,s=212}",
    "{x=394,m=2379,a=535,s=2703}",
    "{x=1664,m=8,a=413,s=337}",
    "{x=192,m=2158,a=1213,s=667}",
    "{x=1597,m=865,a=595,s=55}",
    "{x=1231,m=947,a=339,s=306}",
    "{x=347,m=2771,a=2154,s=993}",
    "{x=1186,m=126,a=552,s=407}",
    "{x=1747,m=1326,a=1974,s=270}",
    "{x=1880,m=1319,a=658,s=27}",
    "{x=1124,m=160,a=350,s=3227}",
    "{x=19,m=1712,a=1866,s=757}",
    "{x=739,m=944,a=890,s=2785}",
    "{x=260,m=1279,a=454,s=95}",
    "{x=90,m=635,a=1189,s=874}",
    "{x=3102,m=39,a=559,s=497}",
    "{x=227,m=1174,a=2384,s=2043}",
    "{x=908,m=957,a=554,s=771}",
    "{x=1176,m=15,a=675,s=2289}",
    "{x=280,m=491,a=1021,s=1174}",
    "{x=2277,m=316,a=1675,s=1308}",
    "{x=56,m=1303,a=1558,s=259}",
    "{x=32,m=125,a=209,s=405}",
    "{x=284,m=2162,a=2769,s=403}",
    "{x=1018,m=1472,a=28,s=134}",
    "{x=2775,m=542,a=127,s=749}",
    "{x=6,m=356,a=3287,s=277}",
    "{x=1993,m=66,a=1202,s=1851}",
    "{x=352,m=1071,a=33,s=175}",
    "{x=807,m=622,a=3419,s=2345}",
  ];
  
  const exampleWorkFlow = [
    "px{a<2006:qkq,m>2090:A,rfg}",
    "pv{a>1716:R,A}",
    "lnx{m>1548:A,A}",
    "rfg{s<537:gd,x>2440:R,A}",
    "qs{s>3448:A,lnx}",
    "qkq{x<1416:A,crn}",
    "crn{x>2662:A,R}",
    "in{s<1351:px,qqz}",
    "qqz{s>2770:qs,m<1801:hdj,R}",
    "gd{a>3333:R,R}",
    "hdj{m>838:A,pv}",
  ];
  
  const exampleParts = [
    "{x=787,m=2655,a=1222,s=2876}",
    "{x=1679,m=44,a=2067,s=496}",
    "{x=2036,m=264,a=79,s=2244}",
    "{x=2461,m=1339,a=466,s=291}",
    "{x=2127,m=1623,a=2188,s=1013}",
  ];

  export { exampleParts, exampleWorkFlow, inputParts, inputWorkFlow }