const data =`
183
185
186
182
185
191
204
203
205
220
215
208
216
217
218
219
210
226
227
231
245
243
255
257
250
255
286
287
286
293
294
296
299
316
322
330
332
337
340
341
339
348
349
350
351
354
357
359
360
361
363
364
365
372
373
371
374
375
379
383
384
383
388
390
395
397
410
412
411
414
411
432
426
429
437
438
462
463
464
477
480
497
516
524
536
547
550
555
557
556
565
566
567
574
575
583
585
594
596
617
621
616
613
616
618
614
615
618
619
621
616
644
649
650
655
658
657
658
661
668
647
651
657
654
656
657
658
666
676
686
692
701
706
705
706
697
701
670
663
667
668
676
677
676
692
714
715
734
768
785
824
829
845
844
847
860
865
880
893
895
899
900
902
905
906
907
906
902
912
927
928
945
952
953
961
969
970
974
975
976
980
989
990
993
1006
1008
1009
1010
1012
1013
1014
1017
1024
1038
1058
1059
1065
1066
1070
1083
1085
1086
1094
1097
1102
1121
1122
1137
1138
1145
1148
1159
1170
1171
1172
1179
1175
1179
1178
1190
1196
1215
1220
1209
1213
1214
1209
1211
1251
1255
1269
1272
1273
1284
1286
1312
1314
1317
1321
1341
1357
1365
1366
1369
1379
1359
1332
1342
1362
1365
1375
1378
1379
1381
1387
1397
1401
1400
1401
1429
1453
1454
1455
1461
1466
1467
1463
1475
1489
1488
1496
1506
1515
1538
1545
1538
1544
1553
1555
1558
1567
1573
1577
1582
1583
1585
1586
1585
1586
1601
1613
1612
1630
1632
1631
1638
1642
1655
1656
1613
1615
1620
1611
1609
1615
1617
1621
1624
1634
1639
1644
1655
1678
1681
1683
1695
1698
1708
1709
1712
1713
1717
1743
1744
1747
1781
1782
1799
1803
1804
1806
1808
1825
1830
1831
1833
1848
1849
1851
1853
1858
1857
1865
1867
1886
1888
1892
1902
1923
1925
1930
1931
1910
1916
1922
1924
1925
1930
1918
1925
1926
1929
1934
1932
1926
1932
1931
1950
1952
1953
1964
1965
1967
1977
1979
1983
1993
1994
1996
2005
2020
2032
2033
2039
2040
2041
2045
2058
2059
2061
2063
2086
2089
2097
2095
2101
2102
2105
2106
2100
2113
2158
2160
2162
2164
2165
2172
2174
2176
2183
2184
2190
2189
2212
2225
2233
2192
2194
2215
2222
2223
2233
2241
2243
2235
2246
2287
2292
2297
2298
2299
2300
2306
2308
2318
2322
2333
2332
2312
2309
2313
2297
2306
2323
2336
2339
2322
2323
2327
2332
2351
2361
2363
2364
2365
2371
2395
2393
2394
2423
2435
2438
2443
2444
2450
2449
2453
2456
2457
2456
2462
2463
2477
2478
2484
2485
2498
2499
2497
2498
2499
2501
2502
2505
2518
2521
2522
2520
2521
2523
2529
2530
2528
2544
2545
2546
2547
2590
2612
2620
2631
2634
2633
2634
2635
2661
2663
2667
2670
2676
2678
2654
2664
2665
2671
2681
2684
2711
2725
2726
2728
2729
2734
2735
2740
2759
2758
2762
2763
2765
2768
2749
2750
2752
2758
2728
2732
2749
2748
2763
2766
2767
2769
2764
2765
2768
2769
2772
2758
2777
2788
2811
2815
2820
2824
2832
2839
2841
2839
2840
2869
2872
2847
2857
2858
2860
2865
2855
2851
2866
2870
2871
2872
2878
2894
2899
2900
2907
2913
2905
2916
2917
2916
2913
2919
2933
2935
2940
2945
2953
2965
2976
2986
2990
3013
3017
3004
2997
2998
2999
3000
2995
2996
2997
2998
3006
3008
3019
3022
3024
3025
3026
3027
3028
3031
3033
3038
3042
3079
3080
3087
3117
3119
3120
3121
3122
3123
3130
3135
3130
3132
3134
3153
3167
3168
3173
3178
3180
3189
3190
3209
3242
3246
3259
3265
3269
3275
3279
3285
3301
3318
3315
3324
3328
3330
3352
3354
3351
3358
3392
3393
3416
3417
3421
3420
3441
3458
3476
3481
3491
3510
3512
3515
3550
3551
3555
3557
3586
3604
3609
3616
3623
3626
3606
3627
3636
3637
3640
3626
3635
3644
3661
3665
3667
3665
3671
3674
3684
3688
3689
3693
3720
3728
3731
3730
3733
3737
3751
3753
3754
3755
3760
3762
3765
3769
3770
3769
3774
3753
3755
3758
3787
3801
3800
3826
3840
3843
3857
3858
3859
3862
3901
3911
3913
3915
3916
3914
3896
3924
3925
3927
3929
3931
3935
3936
3944
3945
3943
3946
3948
3949
3966
3967
3956
3964
3971
3981
3988
3989
3992
4000
4007
4009
4010
4018
4019
4020
4021
4022
4037
4025
4026
4024
4025
4026
4025
4028
4021
4010
4038
4039
4041
4042
4030
4027
4000
4001
4012
4013
4021
4022
4023
4036
4037
4051
4047
4054
4057
4064
4056
4040
4042
4045
4060
4061
4065
4066
4058
4061
4058
4060
4061
4065
4066
4060
4062
4054
4055
4056
4078
4083
4084
4098
4101
4102
4079
4089
4106
4111
4112
4147
4157
4158
4165
4174
4178
4183
4184
4196
4197
4202
4200
4202
4209
4221
4225
4233
4239
4240
4234
4236
4249
4250
4252
4253
4254
4253
4254
4267
4272
4281
4256
4255
4256
4258
4264
4265
4264
4266
4270
4271
4273
4284
4292
4293
4292
4293
4294
4295
4303
4304
4309
4310
4311
4313
4314
4317
4322
4324
4328
4322
4345
4347
4354
4348
4349
4352
4368
4378
4385
4391
4407
4416
4417
4436
4439
4438
4427
4436
4437
4451
4452
4456
4462
4464
4465
4466
4475
4486
4498
4499
4501
4502
4511
4521
4524
4525
4528
4531
4535
4540
4542
4544
4543
4544
4558
4580
4581
4582
4583
4585
4596
4597
4590
4597
4598
4631
4649
4650
4661
4662
4666
4657
4661
4668
4661
4663
4664
4687
4697
4710
4735
4742
4764
4765
4774
4763
4786
4787
4805
4806
4808
4809
4810
4838
4844
4845
4877
4881
4898
4899
4912
4914
4915
4931
4932
4946
4952
4951
4952
4958
4964
4972
4967
4968
4966
4973
4974
4979
4980
4990
5008
5012
5013
5019
5011
5012
5013
5014
5016
5032
5035
5034
5035
5041
5061
5062
5064
5076
5094
5076
5078
5080
5083
5095
5094
5097
5096
5106
5108
5111
5115
5125
5129
5136
5137
5142
5156
5158
5168
5170
5175
5178
5191
5189
5190
5198
5200
5207
5206
5207
5196
5226
5227
5228
5235
5261
5262
5266
5271
5272
5273
5287
5288
5294
5316
5324
5325
5322
5331
5329
5330
5331
5335
5350
5366
5372
5373
5375
5377
5391
5392
5393
5395
5398
5407
5420
5416
5420
5413
5414
5420
5423
5435
5439
5446
5453
5478
5502
5505
5507
5522
5525
5527
5528
5530
5543
5546
5549
5553
5557
5559
5560
5561
5578
5560
5556
5565
5566
5577
5584
5586
5591
5595
5596
5604
5571
5578
5580
5582
5583
5588
5591
5590
5596
5601
5604
5602
5596
5628
5644
5645
5647
5648
5649
5655
5662
5664
5672
5680
5691
5702
5703
5709
5712
5729
5732
5747
5746
5755
5777
5768
5746
5747
5751
5746
5751
5774
5775
5782
5785
5791
5798
5805
5807
5808
5827
5847
5856
5828
5820
5807
5811
5825
5826
5828
5827
5851
5852
5856
5855
5856
5859
5857
5858
5863
5879
5881
5887
5907
5913
5914
5919
5940
5951
5964
5989
5991
5993
5979
5989
5990
6004
6005
6004
6006
6008
6009
6006
6005
6006
5977
5978
5979
5983
5984
5987
5988
5966
5965
5970
5961
5968
5969
5982
5997
6006
6007
6021
6025
6028
6030
6033
6034
6035
6039
6040
6053
6062
6094
6097
6099
6104
6109
6125
6126
6137
6133
6151
6174
6173
6175
6180
6181
6182
6184
6185
6189
6190
6189
6191
6192
6224
6228
6229
6237
6231
6236
6239
6250
6264
6265
6253
6262
6263
6268
6269
6274
6275
6276
6278
6321
6322
6343
6332
6348
6352
6359
6368
6371
6372
6390
6391
6393
6398
6412
6423
6424
6438
6441
6445
6447
6458
6473
6485
6489
6517
6519
6529
6531
6532
6533
6543
6547
6548
6547
6549
6551
6553
6554
6565
6566
6576
6578
6584
6614
6617
6620
6622
6623
6625
6638
6643
6660
6662
6664
6637
6635
6633
6638
6652
6649
6666
6680
6662
6681
6683
6694
6695
6699
6705
6707
6714
6722
6728
6729
6736
6746
6750
6761
6763
6754
6757
6759
6763
6762
6763
6764
6766
6790
6808
6813
6815
6816
6818
6819
6820
6828
6826
6829
6832
6854
6857
6865
6861
6865
6889
6890
6904
6903
6905
6906
6934
6935
6944
6949
6951
6962
6963
6972
6977
6974
6973
6975
7010
7009
7011
7041
7044
7057
7077
7094
7090
7098
7096
7088
7098
7115
7118
7124
7146
7165
7168
7176
7190
7213
7201
7202
7217
7222
7243
7244
7248
7250
7259
7255
7253
7254
7260
7271
7281
7293
7311
7317
7323
7324
7337
7346
7349
7372
7367
7374
7379
7389
7381
7388
7389
7396
7413
7415
7417
7418
7428
7430
7433
7434
7423
7426
7427
7419
7420
7421
7422
7428
7429
7434
7442
7445
7414
7417
7419
7421
7422
7425
7428
7429
7435
7444
7456
7459
7462
7460
7475
7482
7494
7493
7497
7498
7513
7514
7522
7524
7525
7529
7531
7537
7519
7521
7528
7541
7542
7543
7545
7546
7547
7548
7550
7560
7561
7563
7533
7537
7539
7542
7554
7556
7560
7562
7566
7594
7615
7626
7631
7626
7627
7626
7628
7636
7641
7642
7643
7654
7671
7675
7674
7680
7681
7682
7687
7693
7687
7689
7694
7697
7709
7730
7727
7729
7733
7734
7740
7750
7752
7743
7750
7760
7791
7801
7802
7804
7806
7807
7835
7834
7835
7838
7841
7842
7836
7837
7845
7851
7863
7864
7893
7894
7904
7908
7909
7910
7911
7910
7912
7914
7918
7919
7921
7936
7948
7950
7952
7956
7967
7973
7979
7978
7979
7978
7981
7982
7985
7988
7989
7997
7999
8007
8006
8007
8016
8017
8041
8020
8031
8032
8033
8032
8038
8039
8040
8054
8055
8056
8063
8062
8063
8064
8055
8060
8061
8068
8077
8070
8074
8078
8091
8105
8104
8105
8104
8102
8103
8112
8115
8149
8147
8150
8151
8170
8171
8174
8175
8182
8214
8189
8204
8206
8213
8218
8192
8182
8179
8178
8181
8183
8202
8209
8210
8213
8217
8234
8235
8239
8240
8242
8223
8218
8233
8236
8247
8249
8252
8253
8259
8276
8299
8303
8309
8310
8315
8321
8319
8321
8323
8324
8325
8335
8333
8335
8334
8335
8336
8352
8360
8367
8370
8371
8374
8386
8388
8399
8402
8403
8404
8405
8409
8446
8449
8469
8470
8471
8469
8460
8463
8485
8482
8470
8472
8455
8454
8447
8448
8450
8462
8463
8476
8507
8510
8518
8527
8539
8550
8561
8559
8562
8577
8581
8607
8620
8628
8629
8627
8636
8644
8637
8655
8656
8692
8719
8720
8721
8738
8741
8742
8744
8747
8737
8735
8736
8743
8749
8758
8761
8763
8794
8793
8804
8807
8808
8806
8831
8841
8832
8835
8843
8825
8826
8840
8844
8845
8855
8858
8879
8882
8893
8895
8900
8906
8917
8921
8922
8931
8932
8934
8937
8939
8955
8949
8950
8952
8953
8963
8964
8989
8993
8998
9002
8999
9001
9002
9016
9024
9029
9032
9031
9039
9049
9030
9033
9035
9036
9044
9051
9052
9057
9067
9092
9101
9123
9130
9124
9133
9143
9149
9172
9173
9178
9193
9184
9189
9169
9186
9187
9189
9195
9197
9198
9196
9218
9219
9235
9267
9271
9273
9278
9289
9290
9307
9319
9324
9328
9342
9343
9344
9348
9360
9366
9373
9397
9392
9393
9409
9411
9409
9421
9430
9451
9452
9453
9456
9457
9466
9467
9470
9496
9500
9515
9518
9514
9534
9541
9542
9545
9551
9583
9581
9573
9588
9601
9591
9592
9593
9600
9599
9605
9610
9612
9614
9627
9629
9630
9636
9637
9638
9639
9640
9643
9635
9637
9645
9649
9650
9647
9648
9652
9653
9663
9656
9661
9687
9688
9689
9690
9694
9695
9702
9703
9705
9711
9714
9718
9742
9768
9747
9757
9758
9768
9771
9768
9772
9779
9780
9785
9804
9805
9803
9801
9802
9810
9816
9820
9810
9815
9816
9823
9824
9830
9831
9841
9860
9875
`
export default data;