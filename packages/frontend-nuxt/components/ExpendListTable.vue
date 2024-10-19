<script setup lang="ts">
import { formatDate, formatPrice } from '~/utils/format';
import { tableDateCellCssClass, categoryIconStyle } from "~/utils/style";
// const expends = [
//   {
//     "id": 171,
//     "createdAt": "2024-09-30T12:23:51.991Z",
//     "updatedAt": "2024-09-30T12:23:51.991Z",
//     "price": 325,
//     "description": "イオン",
//     "date": "2024-09-30",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 170,
//     "createdAt": "2024-09-30T04:56:42.285Z",
//     "updatedAt": "2024-10-05T11:08:50.137Z",
//     "price": 165,
//     "description": "【楽天ポイント】ファミマ",
//     "date": "2024-09-30",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 169,
//     "createdAt": "2024-09-29T09:19:41.975Z",
//     "updatedAt": "2024-10-05T11:12:34.218Z",
//     "price": 602,
//     "description": "【楽天ポイント】7デザート",
//     "date": "2024-09-29",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 168,
//     "createdAt": "2024-09-29T02:35:16.229Z",
//     "updatedAt": "2024-09-29T02:35:16.229Z",
//     "price": 2000,
//     "description": "スタバ",
//     "date": "2024-09-29",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 167,
//     "createdAt": "2024-09-29T02:25:49.624Z",
//     "updatedAt": "2024-09-29T02:25:49.624Z",
//     "price": 779,
//     "description": "イオン",
//     "date": "2024-09-29",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 166,
//     "createdAt": "2024-09-28T09:02:57.890Z",
//     "updatedAt": "2024-09-28T09:03:25.812Z",
//     "price": 1428,
//     "description": "7",
//     "date": "2024-09-28",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 164,
//     "createdAt": "2024-09-28T04:17:42.767Z",
//     "updatedAt": "2024-09-28T04:17:42.767Z",
//     "price": 669,
//     "description": "ミスド",
//     "date": "2024-09-28",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 163,
//     "createdAt": "2024-09-28T04:13:16.940Z",
//     "updatedAt": "2024-09-28T04:13:16.940Z",
//     "price": 3329,
//     "description": "イオン",
//     "date": "2024-09-28",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 162,
//     "createdAt": "2024-09-28T02:11:35.139Z",
//     "updatedAt": "2024-10-05T11:08:37.257Z",
//     "price": 768,
//     "description": "【楽天ポイント】ローソン",
//     "date": "2024-09-28",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 161,
//     "createdAt": "2024-09-28T01:23:54.030Z",
//     "updatedAt": "2024-10-05T11:08:10.500Z",
//     "price": 384,
//     "description": "【楽天ポイント】7",
//     "date": "2024-09-28",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 193,
//     "createdAt": "2024-10-05T11:07:45.162Z",
//     "updatedAt": "2024-10-05T11:20:48.085Z",
//     "price": 345,
//     "description": "【楽天ポイント】ファミマ",
//     "date": "2024-09-27",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 175,
//     "createdAt": "2024-10-02T13:31:48.300Z",
//     "updatedAt": "2024-10-02T13:31:48.300Z",
//     "price": 990,
//     "description": "さくらインターネット",
//     "date": "2024-09-27",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 160,
//     "createdAt": "2024-09-27T12:49:08.015Z",
//     "updatedAt": "2024-09-27T12:49:08.015Z",
//     "price": 576,
//     "description": "イオン",
//     "date": "2024-09-27",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 159,
//     "createdAt": "2024-09-26T10:51:00.727Z",
//     "updatedAt": "2024-10-05T11:07:12.358Z",
//     "price": 265,
//     "description": "【楽天ポイント】7:",
//     "date": "2024-09-26",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 158,
//     "createdAt": "2024-09-25T23:33:03.341Z",
//     "updatedAt": "2024-10-05T11:07:05.954Z",
//     "price": 330,
//     "description": "【楽天ポイント】ファミマ",
//     "date": "2024-09-26",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 157,
//     "createdAt": "2024-09-25T04:12:54.979Z",
//     "updatedAt": "2024-10-05T11:06:41.282Z",
//     "price": 887,
//     "description": "【楽天ポイント】7:",
//     "date": "2024-09-25",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 156,
//     "createdAt": "2024-09-24T11:22:45.435Z",
//     "updatedAt": "2024-10-05T11:06:26.327Z",
//     "price": 265,
//     "description": "【楽天ポイント】7おやつ",
//     "date": "2024-09-24",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 155,
//     "createdAt": "2024-09-23T10:27:17.046Z",
//     "updatedAt": "2024-09-23T10:27:17.046Z",
//     "price": 1078,
//     "description": "イオン",
//     "date": "2024-09-23",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 150,
//     "createdAt": "2024-09-23T08:02:59.252Z",
//     "updatedAt": "2024-09-23T08:02:59.252Z",
//     "price": 2657,
//     "description": "バロー食品とか",
//     "date": "2024-09-23",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 148,
//     "createdAt": "2024-09-23T08:01:39.616Z",
//     "updatedAt": "2024-09-24T05:54:25.261Z",
//     "price": 3600,
//     "description": "ヤオコー",
//     "date": "2024-09-23",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 152,
//     "createdAt": "2024-09-23T08:05:29.718Z",
//     "updatedAt": "2024-09-23T08:05:29.718Z",
//     "price": 2000,
//     "description": "スタバ",
//     "date": "2024-09-22",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 151,
//     "createdAt": "2024-09-23T08:03:56.116Z",
//     "updatedAt": "2024-10-05T11:06:17.406Z",
//     "price": 389,
//     "description": "【楽天ポイント】談合坂帰り",
//     "date": "2024-09-22",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 149,
//     "createdAt": "2024-09-23T08:02:34.089Z",
//     "updatedAt": "2024-09-23T08:05:56.098Z",
//     "price": 3394,
//     "description": "ベルシャイン：コーヒーサーバーとくるみやまびこ",
//     "date": "2024-09-22",
//     "categoryId": 4,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 147,
//     "createdAt": "2024-09-23T08:01:01.859Z",
//     "updatedAt": "2024-09-23T08:01:01.859Z",
//     "price": 840,
//     "description": "伊那：コーヒー豆",
//     "date": "2024-09-22",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 146,
//     "createdAt": "2024-09-22T06:23:16.742Z",
//     "updatedAt": "2024-09-22T06:23:16.742Z",
//     "price": 2420,
//     "description": "ハイキュー本",
//     "date": "2024-09-22",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 165,
//     "createdAt": "2024-09-28T08:11:58.958Z",
//     "updatedAt": "2024-09-28T08:11:58.958Z",
//     "price": 2657,
//     "description": "伊那バロー",
//     "date": "2024-09-21",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 154,
//     "createdAt": "2024-09-23T08:06:49.267Z",
//     "updatedAt": "2024-09-28T08:12:39.954Z",
//     "price": 1850,
//     "description": "長門牧場ソフト",
//     "date": "2024-09-21",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 153,
//     "createdAt": "2024-09-23T08:06:15.698Z",
//     "updatedAt": "2024-09-23T08:06:15.698Z",
//     "price": 1500,
//     "description": "スタバ",
//     "date": "2024-09-21",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 145,
//     "createdAt": "2024-09-21T01:03:55.628Z",
//     "updatedAt": "2024-10-05T11:06:07.849Z",
//     "price": 213,
//     "description": "【楽天ポイント】西友：水",
//     "date": "2024-09-21",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 143,
//     "createdAt": "2024-09-20T14:15:01.395Z",
//     "updatedAt": "2024-09-20T14:15:01.395Z",
//     "price": 4600,
//     "description": "日本橋焼き菓子お土産",
//     "date": "2024-09-20",
//     "categoryId": 4,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 141,
//     "createdAt": "2024-09-20T14:14:05.386Z",
//     "updatedAt": "2024-09-20T14:14:05.386Z",
//     "price": 2592,
//     "description": "房の駅",
//     "date": "2024-09-20",
//     "categoryId": 4,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 136,
//     "createdAt": "2024-09-19T23:27:35.768Z",
//     "updatedAt": "2024-10-05T11:05:54.653Z",
//     "price": 478,
//     "description": "【楽天ポイント】ファミマ",
//     "date": "2024-09-20",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 137,
//     "createdAt": "2024-09-19T23:32:32.611Z",
//     "updatedAt": "2024-10-05T11:05:48.358Z",
//     "price": 180,
//     "description": "【楽天ポイント】ファミマ",
//     "date": "2024-09-19",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 135,
//     "createdAt": "2024-09-19T11:21:01.756Z",
//     "updatedAt": "2024-09-19T11:21:01.756Z",
//     "price": 969,
//     "description": "イオン",
//     "date": "2024-09-19",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 134,
//     "createdAt": "2024-09-18T03:15:45.260Z",
//     "updatedAt": "2024-10-05T11:05:37.368Z",
//     "price": 1259,
//     "description": "【楽天ポイント】7お昼",
//     "date": "2024-09-18",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 133,
//     "createdAt": "2024-09-17T16:03:53.708Z",
//     "updatedAt": "2024-09-17T16:03:53.708Z",
//     "price": 398,
//     "description": "イオン",
//     "date": "2024-09-18",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 144,
//     "createdAt": "2024-09-20T14:17:19.041Z",
//     "updatedAt": "2024-09-20T14:17:19.041Z",
//     "price": 5000,
//     "description": "会社飲み会",
//     "date": "2024-09-17",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 132,
//     "createdAt": "2024-09-16T08:13:40.836Z",
//     "updatedAt": "2024-09-16T08:13:46.773Z",
//     "price": 2637,
//     "description": "イオン",
//     "date": "2024-09-16",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 131,
//     "createdAt": "2024-09-16T05:19:10.980Z",
//     "updatedAt": "2024-10-05T11:05:25.673Z",
//     "price": 649,
//     "description": "【楽天ポイント】7",
//     "date": "2024-09-16",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 103,
//     "createdAt": "2024-09-16T04:20:29.532Z",
//     "updatedAt": "2024-09-16T04:56:31.534Z",
//     "price": 2162,
//     "description": "ピーター・パン",
//     "date": "2024-09-16",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 130,
//     "createdAt": "2024-09-16T04:53:03.396Z",
//     "updatedAt": "2024-09-16T04:53:03.396Z",
//     "price": 1851,
//     "description": "【伊勢】Enejet",
//     "date": "2024-09-15",
//     "categoryId": 12,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 12,
//       "name": "自動車維持費",
//       "colorCode": "6965eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 129,
//     "createdAt": "2024-09-16T04:52:38.177Z",
//     "updatedAt": "2024-09-16T04:52:38.177Z",
//     "price": 4223,
//     "description": "【伊勢】COSMO",
//     "date": "2024-09-15",
//     "categoryId": 12,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 12,
//       "name": "自動車維持費",
//       "colorCode": "6965eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 127,
//     "createdAt": "2024-09-16T04:45:48.568Z",
//     "updatedAt": "2024-09-16T04:45:48.568Z",
//     "price": 1100,
//     "description": "【伊勢】名古屋モーニング",
//     "date": "2024-09-15",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 111,
//     "createdAt": "2024-09-16T04:28:57.625Z",
//     "updatedAt": "2024-09-16T04:28:57.625Z",
//     "price": 2620,
//     "description": "【伊勢】名古屋駐車場",
//     "date": "2024-09-15",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 110,
//     "createdAt": "2024-09-16T04:27:15.073Z",
//     "updatedAt": "2024-09-16T04:28:16.069Z",
//     "price": 4840,
//     "description": "【伊勢】焼津海鮮丼",
//     "date": "2024-09-15",
//     "categoryId": 6,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 109,
//     "createdAt": "2024-09-16T04:25:57.898Z",
//     "updatedAt": "2024-09-16T04:26:08.501Z",
//     "price": 2500,
//     "description": "【伊勢】ひものお土産",
//     "date": "2024-09-15",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 194,
//     "createdAt": "2024-10-05T11:15:20.561Z",
//     "updatedAt": "2024-10-05T11:15:42.432Z",
//     "price": 894,
//     "description": "【楽天キャッシュ】【伊勢】伊勢夜ご飯（1,980）",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 126,
//     "createdAt": "2024-09-16T04:44:29.908Z",
//     "updatedAt": "2024-10-05T11:15:36.177Z",
//     "price": 1086,
//     "description": "【楽天ポイント】【伊勢】伊勢夜ご飯（1,980）",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 125,
//     "createdAt": "2024-09-16T04:42:05.277Z",
//     "updatedAt": "2024-10-05T11:11:03.229Z",
//     "price": 6320,
//     "description": "【楽天キャッシュ】【伊勢】伊勢夜ご飯",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 124,
//     "createdAt": "2024-09-16T04:41:45.426Z",
//     "updatedAt": "2024-10-05T11:04:35.395Z",
//     "price": 950,
//     "description": "【楽天ポイント】【伊勢】IMOM COFFEE",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 123,
//     "createdAt": "2024-09-16T04:41:24.096Z",
//     "updatedAt": "2024-10-05T11:04:54.900Z",
//     "price": 952,
//     "description": "【楽天ポイント】【伊勢】7夜",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 116,
//     "createdAt": "2024-09-16T04:32:10.874Z",
//     "updatedAt": "2024-09-16T04:32:10.874Z",
//     "price": 5400,
//     "description": "【伊勢】赤福お土産",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 115,
//     "createdAt": "2024-09-16T04:31:28.119Z",
//     "updatedAt": "2024-09-16T04:31:28.119Z",
//     "price": 6320,
//     "description": "【伊勢】伊勢土産",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 114,
//     "createdAt": "2024-09-16T04:30:51.149Z",
//     "updatedAt": "2024-09-16T04:30:51.149Z",
//     "price": 1390,
//     "description": "【伊勢】presto coffee",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 113,
//     "createdAt": "2024-09-16T04:30:02.407Z",
//     "updatedAt": "2024-09-16T04:30:02.407Z",
//     "price": 1900,
//     "description": "【伊勢】宮きしめん",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 112,
//     "createdAt": "2024-09-16T04:29:36.746Z",
//     "updatedAt": "2024-09-16T04:29:36.746Z",
//     "price": 8340,
//     "description": "【伊勢】名古屋居酒屋",
//     "date": "2024-09-14",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 128,
//     "createdAt": "2024-09-16T04:52:15.817Z",
//     "updatedAt": "2024-09-16T04:52:15.817Z",
//     "price": 5109,
//     "description": "【伊勢】ENEOS",
//     "date": "2024-09-13",
//     "categoryId": 12,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 12,
//       "name": "自動車維持費",
//       "colorCode": "6965eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 120,
//     "createdAt": "2024-09-16T04:34:30.159Z",
//     "updatedAt": "2024-09-16T04:34:30.159Z",
//     "price": 810,
//     "description": "【伊勢】おかげ横丁ほうじ茶",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 119,
//     "createdAt": "2024-09-16T04:33:55.322Z",
//     "updatedAt": "2024-09-16T04:33:55.322Z",
//     "price": 2400,
//     "description": "【伊勢】おかげ横丁肉寿司",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 118,
//     "createdAt": "2024-09-16T04:33:31.328Z",
//     "updatedAt": "2024-09-16T04:33:31.328Z",
//     "price": 600,
//     "description": "【伊勢】赤福本店",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 117,
//     "createdAt": "2024-09-16T04:32:55.279Z",
//     "updatedAt": "2024-09-16T04:32:55.279Z",
//     "price": 928,
//     "description": "【伊勢】ファミマ夜",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 108,
//     "createdAt": "2024-09-16T04:25:05.081Z",
//     "updatedAt": "2024-09-16T04:43:17.695Z",
//     "price": 420,
//     "description": "【伊勢】おかげ横丁ころっけメンチ",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 107,
//     "createdAt": "2024-09-16T04:24:38.827Z",
//     "updatedAt": "2024-09-16T04:43:22.689Z",
//     "price": 140,
//     "description": "【伊勢】おかげ横丁水",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 106,
//     "createdAt": "2024-09-16T04:23:43.544Z",
//     "updatedAt": "2024-09-16T04:23:43.544Z",
//     "price": 463,
//     "description": "【伊勢】おかげ横丁うどんタレ",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 105,
//     "createdAt": "2024-09-16T04:23:04.210Z",
//     "updatedAt": "2024-09-16T04:23:04.210Z",
//     "price": 1391,
//     "description": "【伊勢】ミニストップ朝ご飯",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 104,
//     "createdAt": "2024-09-16T04:21:36.101Z",
//     "updatedAt": "2024-09-16T04:21:36.101Z",
//     "price": 950,
//     "description": "【伊勢】おかげ横丁うどん",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 102,
//     "createdAt": "2024-09-13T06:10:07.754Z",
//     "updatedAt": "2024-09-16T04:37:43.435Z",
//     "price": 17000,
//     "description": "【伊勢】伊勢宿代",
//     "date": "2024-09-13",
//     "categoryId": 6,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 122,
//     "createdAt": "2024-09-16T04:37:01.363Z",
//     "updatedAt": "2024-09-16T04:37:01.363Z",
//     "price": 18077,
//     "description": "【伊勢】名古屋宿代",
//     "date": "2024-09-12",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 121,
//     "createdAt": "2024-09-16T04:35:14.359Z",
//     "updatedAt": "2024-09-16T04:35:14.359Z",
//     "price": 4350,
//     "description": "明弘美容院",
//     "date": "2024-09-12",
//     "categoryId": 4,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 100,
//     "createdAt": "2024-09-12T11:30:23.818Z",
//     "updatedAt": "2024-09-12T11:30:23.818Z",
//     "price": 892,
//     "description": "イオン",
//     "date": "2024-09-12",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 99,
//     "createdAt": "2024-09-12T07:11:14.376Z",
//     "updatedAt": "2024-09-12T07:11:14.376Z",
//     "price": 678,
//     "description": "7:",
//     "date": "2024-09-12",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 98,
//     "createdAt": "2024-09-12T06:18:05.090Z",
//     "updatedAt": "2024-09-12T06:20:27.952Z",
//     "price": 2761,
//     "description": "イオン口内炎薬",
//     "date": "2024-09-12",
//     "categoryId": 4,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 97,
//     "createdAt": "2024-09-12T01:50:05.754Z",
//     "updatedAt": "2024-09-12T01:50:05.754Z",
//     "price": 1000,
//     "description": "スタバ",
//     "date": "2024-09-12",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 142,
//     "createdAt": "2024-09-20T14:14:36.646Z",
//     "updatedAt": "2024-09-20T14:14:36.646Z",
//     "price": 535,
//     "description": "イオン",
//     "date": "2024-09-11",
//     "categoryId": 1,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 101,
//     "createdAt": "2024-09-12T19:24:45.499Z",
//     "updatedAt": "2024-09-12T19:24:45.499Z",
//     "price": 535,
//     "description": "李沙に確認",
//     "date": "2024-09-11",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 96,
//     "createdAt": "2024-09-10T22:58:00.304Z",
//     "updatedAt": "2024-09-10T22:58:00.304Z",
//     "price": 907,
//     "description": "7:",
//     "date": "2024-09-11",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 95,
//     "createdAt": "2024-09-10T12:14:26.033Z",
//     "updatedAt": "2024-09-10T12:14:26.033Z",
//     "price": 373,
//     "description": "イオン",
//     "date": "2024-09-10",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 94,
//     "createdAt": "2024-09-10T03:48:34.392Z",
//     "updatedAt": "2024-09-10T03:48:34.392Z",
//     "price": 250,
//     "description": "7:",
//     "date": "2024-09-10",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 93,
//     "createdAt": "2024-09-10T03:42:56.504Z",
//     "updatedAt": "2024-09-10T03:42:56.504Z",
//     "price": 657,
//     "description": "EVE",
//     "date": "2024-09-10",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 92,
//     "createdAt": "2024-09-09T23:26:11.446Z",
//     "updatedAt": "2024-09-09T23:26:11.446Z",
//     "price": 515,
//     "description": "7:",
//     "date": "2024-09-10",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 140,
//     "createdAt": "2024-09-20T14:13:35.587Z",
//     "updatedAt": "2024-09-20T14:13:35.587Z",
//     "price": 298,
//     "description": "イオンおやつ",
//     "date": "2024-09-09",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 91,
//     "createdAt": "2024-09-09T12:24:44.944Z",
//     "updatedAt": "2024-09-09T12:24:44.944Z",
//     "price": 181,
//     "description": "イオン",
//     "date": "2024-09-09",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 89,
//     "createdAt": "2024-09-08T13:18:05.282Z",
//     "updatedAt": "2024-09-08T13:18:05.282Z",
//     "price": 12823,
//     "description": "イオンネット（12,585）",
//     "date": "2024-09-08",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 88,
//     "createdAt": "2024-09-08T13:17:45.806Z",
//     "updatedAt": "2024-09-08T13:17:45.806Z",
//     "price": 354,
//     "description": "イオンネット（12,585）",
//     "date": "2024-09-08",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 87,
//     "createdAt": "2024-09-08T13:16:42.662Z",
//     "updatedAt": "2024-09-08T13:16:42.662Z",
//     "price": 1846,
//     "description": "イオン（2,494）",
//     "date": "2024-09-08",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 86,
//     "createdAt": "2024-09-08T13:16:18.291Z",
//     "updatedAt": "2024-09-08T13:16:18.291Z",
//     "price": 648,
//     "description": "ソフラン（2,494）",
//     "date": "2024-09-08",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 85,
//     "createdAt": "2024-09-08T03:46:14.027Z",
//     "updatedAt": "2024-09-08T03:46:14.027Z",
//     "price": 1500,
//     "description": "スタバ",
//     "date": "2024-09-08",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 84,
//     "createdAt": "2024-09-08T03:45:58.754Z",
//     "updatedAt": "2024-09-08T03:45:58.754Z",
//     "price": 147,
//     "description": "イオン",
//     "date": "2024-09-08",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 139,
//     "createdAt": "2024-09-20T14:13:17.346Z",
//     "updatedAt": "2024-09-20T14:13:17.346Z",
//     "price": 1730,
//     "description": "歯医者",
//     "date": "2024-09-07",
//     "categoryId": 4,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 79,
//     "createdAt": "2024-09-07T14:59:53.493Z",
//     "updatedAt": "2024-09-07T15:00:28.306Z",
//     "price": 3187,
//     "description": "【小浜島】旅行雑貨",
//     "date": "2024-09-07",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 78,
//     "createdAt": "2024-09-07T14:15:54.149Z",
//     "updatedAt": "2024-09-07T14:15:54.149Z",
//     "price": 7057,
//     "description": "ガス水道",
//     "date": "2024-09-07",
//     "categoryId": 10,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 5,
//     "processed": false,
//     "category": {
//       "id": 10,
//       "name": "水道ガス",
//       "colorCode": "65ebe8"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 5,
//       "name": "みずほ振替"
//     }
//   },
//   {
//     "id": 77,
//     "createdAt": "2024-09-07T12:42:15.162Z",
//     "updatedAt": "2024-09-07T12:42:15.162Z",
//     "price": 127,
//     "description": "イオンアイス",
//     "date": "2024-09-07",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 76,
//     "createdAt": "2024-09-07T10:01:02.496Z",
//     "updatedAt": "2024-09-07T10:01:02.496Z",
//     "price": 127,
//     "description": "7",
//     "date": "2024-09-07",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 75,
//     "createdAt": "2024-09-07T09:39:48.374Z",
//     "updatedAt": "2024-09-07T09:39:48.374Z",
//     "price": 330,
//     "description": "セリア",
//     "date": "2024-09-07",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 74,
//     "createdAt": "2024-09-07T09:32:44.004Z",
//     "updatedAt": "2024-09-07T09:32:44.004Z",
//     "price": 1155,
//     "description": "岡山本",
//     "date": "2024-09-07",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 3,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 3,
//       "name": "李沙個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 73,
//     "createdAt": "2024-09-07T09:24:44.681Z",
//     "updatedAt": "2024-09-07T09:24:44.681Z",
//     "price": 490,
//     "description": "無印",
//     "date": "2024-09-07",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 70,
//     "createdAt": "2024-09-07T06:06:22.831Z",
//     "updatedAt": "2024-09-08T13:22:43.241Z",
//     "price": 2360,
//     "description": "ケーキ",
//     "date": "2024-09-07",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 69,
//     "createdAt": "2024-09-07T06:06:09.476Z",
//     "updatedAt": "2024-09-07T06:06:09.476Z",
//     "price": 2040,
//     "description": "ヤオコー",
//     "date": "2024-09-07",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 68,
//     "createdAt": "2024-09-07T02:05:32.236Z",
//     "updatedAt": "2024-09-07T02:05:32.236Z",
//     "price": 1675,
//     "description": "イオン",
//     "date": "2024-09-07",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 67,
//     "createdAt": "2024-09-07T00:44:06.383Z",
//     "updatedAt": "2024-09-07T15:00:20.127Z",
//     "price": 9006,
//     "description": "【小浜島】レンティオgo pro",
//     "date": "2024-09-07",
//     "categoryId": 6,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 6,
//       "name": "旅行",
//       "colorCode": "eb65cb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 66,
//     "createdAt": "2024-09-06T12:14:48.177Z",
//     "updatedAt": "2024-09-06T12:14:48.177Z",
//     "price": 531,
//     "description": "イオン",
//     "date": "2024-09-06",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 59,
//     "createdAt": "2024-09-05T13:30:32.517Z",
//     "updatedAt": "2024-09-05T13:30:32.517Z",
//     "price": 2780,
//     "description": "津田沼タワークリニック",
//     "date": "2024-09-05",
//     "categoryId": 4,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 58,
//     "createdAt": "2024-09-05T13:29:07.857Z",
//     "updatedAt": "2024-09-05T13:29:07.857Z",
//     "price": 439,
//     "description": "角上",
//     "date": "2024-09-05",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 57,
//     "createdAt": "2024-09-05T13:28:46.387Z",
//     "updatedAt": "2024-09-05T13:28:46.387Z",
//     "price": 800,
//     "description": "駐車場",
//     "date": "2024-09-05",
//     "categoryId": 4,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 3,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 3,
//       "name": "明弘現金"
//     }
//   },
//   {
//     "id": 56,
//     "createdAt": "2024-09-05T06:28:25.586Z",
//     "updatedAt": "2024-09-05T06:28:25.586Z",
//     "price": 184,
//     "description": "マスク",
//     "date": "2024-09-05",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 55,
//     "createdAt": "2024-09-05T03:47:16.542Z",
//     "updatedAt": "2024-09-05T03:47:16.542Z",
//     "price": 1526,
//     "description": "イオン",
//     "date": "2024-09-05",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 54,
//     "createdAt": "2024-09-04T11:46:56.979Z",
//     "updatedAt": "2024-09-04T11:46:56.979Z",
//     "price": 415,
//     "description": "汗拭きシート",
//     "date": "2024-09-04",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 53,
//     "createdAt": "2024-09-04T11:42:39.799Z",
//     "updatedAt": "2024-09-04T11:42:39.799Z",
//     "price": 1082,
//     "description": "イオン",
//     "date": "2024-09-04",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 52,
//     "createdAt": "2024-09-03T15:09:25.924Z",
//     "updatedAt": "2024-09-03T15:09:25.924Z",
//     "price": 1270,
//     "description": "シャンプー",
//     "date": "2024-09-04",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 138,
//     "createdAt": "2024-09-20T14:12:38.341Z",
//     "updatedAt": "2024-09-20T14:12:38.341Z",
//     "price": 703,
//     "description": "イオン",
//     "date": "2024-09-03",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 2,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 2,
//       "name": "JCB（1323）"
//     }
//   },
//   {
//     "id": 51,
//     "createdAt": "2024-09-03T10:52:55.832Z",
//     "updatedAt": "2024-09-03T10:52:55.832Z",
//     "price": 1054,
//     "description": "イオン",
//     "date": "2024-09-03",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 50,
//     "createdAt": "2024-09-03T03:35:17.310Z",
//     "updatedAt": "2024-09-03T03:35:17.310Z",
//     "price": 150,
//     "description": "ファミマ",
//     "date": "2024-09-03",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 49,
//     "createdAt": "2024-09-02T23:27:51.515Z",
//     "updatedAt": "2024-09-02T23:27:51.515Z",
//     "price": 64,
//     "description": "ファミマ",
//     "date": "2024-09-03",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 48,
//     "createdAt": "2024-09-02T12:21:34.796Z",
//     "updatedAt": "2024-09-02T12:21:34.796Z",
//     "price": 170,
//     "description": "イオン",
//     "date": "2024-09-02",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 2,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 2,
//       "name": "明弘個人"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 90,
//     "createdAt": "2024-09-08T13:27:23.624Z",
//     "updatedAt": "2024-09-08T13:27:23.624Z",
//     "price": 1697,
//     "description": "amazon: 鼻のやつとか",
//     "date": "2024-09-01",
//     "categoryId": 2,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 2,
//       "name": "雑貨",
//       "colorCode": "65a6eb"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 38,
//     "createdAt": "2024-09-01T12:48:02.259Z",
//     "updatedAt": "2024-09-01T12:48:02.259Z",
//     "price": 1500,
//     "description": "amazon: 防水スマホケース",
//     "date": "2024-09-01",
//     "categoryId": 4,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 37,
//     "createdAt": "2024-09-01T05:51:50.446Z",
//     "updatedAt": "2024-09-01T05:51:50.446Z",
//     "price": 4000,
//     "description": "albus",
//     "date": "2024-09-01",
//     "categoryId": 4,
//     "payerId": 2,
//     "budgetId": 1,
//     "paymentMethodId": 4,
//     "processed": false,
//     "category": {
//       "id": 4,
//       "name": "その他",
//       "colorCode": "b365eb"
//     },
//     "payer": {
//       "id": 2,
//       "name": "李沙"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 4,
//       "name": "李沙現金"
//     }
//   },
//   {
//     "id": 36,
//     "createdAt": "2024-09-01T04:22:15.694Z",
//     "updatedAt": "2024-09-01T04:22:15.694Z",
//     "price": 2716,
//     "description": "イオン",
//     "date": "2024-09-01",
//     "categoryId": 1,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 1,
//       "name": "食費",
//       "colorCode": "eb9665"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   },
//   {
//     "id": 32,
//     "createdAt": "2024-09-01T00:20:26.468Z",
//     "updatedAt": "2024-09-01T00:20:26.468Z",
//     "price": 1500,
//     "description": "スタバ",
//     "date": "2024-09-01",
//     "categoryId": 3,
//     "payerId": 1,
//     "budgetId": 1,
//     "paymentMethodId": 1,
//     "processed": false,
//     "category": {
//       "id": 3,
//       "name": "お小遣い",
//       "colorCode": "ebba65"
//     },
//     "payer": {
//       "id": 1,
//       "name": "明弘"
//     },
//     "budget": {
//       "id": 1,
//       "name": "共同支出"
//     },
//     "paymentMethod": {
//       "id": 1,
//       "name": "VISA（8119）"
//     }
//   }
// ]

// const queryClient = useQueryClient()
// Query

const props = defineProps({
  yearMonth: {
    type: String,
    required: true,
  }
});
const { data: expends } = await useFetch(
  `http://localhost:3001/expends/?yearMonth=${props.yearMonth}`,
)
</script>

<template>
  <div class="control-panel">
    <base-button color="primary">支払追加</base-button>
  </div>
  <base-table sticky-header>
    <thead>
      <tr>
        <th>日付</th>
        <th>料金</th>
        <th>内容</th>
        <th>カテゴリー</th>
        <th>支払者</th>
        <th>支払方法</th>
        <th>支払元</th>
        <th>精算済</th>
        <th>編集</th>
        <th>削除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="expend in expends" :key="expend.id">
        <td :class="tableDateCellCssClass(expend.date)">{{ formatDate(expend.date) }}</td>
        <td class="price-cell">{{ formatPrice(expend.price) }}</td>
        <td>{{ expend.description }}</td>
        <td>
          <div class="category-cell-content">
            <Icon name="mdi:local-offer" :style="categoryIconStyle(expend.category.colorCode)" class="category-icon" />
            {{ expend.category.name }}
          </div>
        </td>
        <td>{{ expend.payer.name }}</td>
        <td>{{ expend.paymentMethod.name }}</td>
        <td>{{ expend.budget.name }}</td>
        <td>
          <Icon name="mdi:check-circle" :class="['processed-icon', { 'processed': expend.processed }]" />
        </td>
        <td><base-button>編集</base-button></td>
        <td><base-button color="grayscale">削除</base-button></td>
      </tr>
    </tbody>
  </base-table>
</template>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.is-sunday {
  color: var(--color-text-sunday);
}

.is-saturday {
  color: var(--color-text-saturday);
}

.price-cell {
  text-align: right;
}

.category-icon {
  font-size: 14px;
}

.processed-icon {
  display: block;
  margin: auto auto auto 0;
  font-size: 20px;
  color: var(--color-icon-disabled);
}

.processed-icon.processed {
  color: var(--color-primary);
}

.category-cell-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 100%;
}
</style>