import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

// async function main() {
//   // await prisma.user.createMany({
//   //   data: [
//   //     {
//   //       email: `dayoshii27@gmail.com`,
//   //       role: 'ADMIN',
//   //     },
//   //     {
//   //       email: `yayr1015@gmail.com`,
//   //       role: 'USER',
//   //     },
//   //   ],
//   // });
//   // await prisma.category.update({
//   //   where: {
//   //     id: 1,
//   //   },
//   //   data: {
//   //     name: '食費',
//   //   },
//   // });
//   // await prisma.category.createMany({
//   //   data: [
//   //     // { name: '食費', code: 'food', colorCode: 'eb9665' },
//   //     // { name: '雑貨', code: 'goods', colorCode: '65a6eb' },
//   //     // { name: 'お小遣い', code: 'personal', colorCode: 'ebba65' },
//   //     // { name: 'その他', code: 'others', colorCode: '#b365eb' },
//   //     // { name: '貯金', code: 'savings', colorCode: 'ebd465' },
//   //     // { name: '旅行', code: 'travel', colorCode: 'eb65cb' },
//   //     // { name: 'イベント', code: 'event', colorCode: '7deb65' },
//   //     // { name: '電気代', code: 'electric', colorCode: 'dbeb65' },
//   //     // { name: '水道ガス', code: 'utility', colorCode: '65ebe8' },
//   //     // { name: 'ちばぎん', code: 'chibagin', colorCode: 'eb6e65' },
//   //     // { name: '毎月', code: 'monthly', colorCode: '65eb9d' },
//   //     { name: '自動車維持費', code: 'car', colorCode: '6965eb' },
//   //   ],
//   // });
//   // await prisma.budget.createMany({
//   //   data: [
//   //     { name: '共同支出', code: 'shared' },
//   //     { name: '明弘個人', code: 'akihiro' },
//   //     { name: '李沙個人', code: 'risa' },
//   //   ],
//   // });
//   // await prisma.paymentMethod.createMany({
//   //   data: [
//   //     { name: 'VISA（8119）', code: 'visa8119', payerId: 1 },
//   //     { name: 'JCB（1323）', code: 'jcb1323', payerId: 1 },
//   //     { name: '明弘現金', code: 'cash-akihiro', payerId: 1 },
//   //     { name: '李沙現金', code: 'cash-risa', payerId: 2 },
//   //     { name: 'みずほ振替', code: 'mizuho', payerId: 1 },
//   //     { name: 'ちば銀行振替', code: 'chibagin', payerId: 1 },
//   //   ],
//   // });
//   // await prisma.payer.createMany({
//   //   data: [
//   //     { name: '明弘', code: 'akihiro' },
//   //     { name: '李沙', code: 'risa' },
//   //   ],
//   // });
//   // await prisma.expend.createMany({
//   //   data: [
//   //     {
//   //       date: '2023-11-02',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 2,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-03',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 3,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-04',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 4,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-05',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 5,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-06',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 6,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-07',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 7,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-08',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 8,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-09',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 9,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-10',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 10,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //     {
//   //       date: '2023-11-11',
//   //       price: 1000,
//   //       description: 'test',
//   //       categoryId: 11,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       payerId: 1,
//   //     },
//   //   ],
//   // });
//   // await prisma.countingItem.create({
//   //   data: {
//   //     name: 'サンプル集計項目1（共同visa明弘）',
//   //     code: 'sample1',
//   //     processed: [true, false],
//   //     paymentMethods: {
//   //       create: [
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //     budgets: {
//   //       create: [
//   //         {
//   //           budget: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //     payers: {
//   //       create: [
//   //         {
//   //           payer: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //   },
//   // })
//   // await prisma.customCountingItemTerm.create({
//   //   data: {
//   //     sign: "PLUS",
//   //     coefficient: 1,
//   //     processed: [true, false],
//   //     categories: {
//   //       create: [
//   //         {
//   //           category: {
//   //             connect: {
//   //               id: 3,
//   //             },
//   //           },
//   //         },
//   //       ],
//   //     },
//   //     paymentMethods: {
//   //       create: [
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           },
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 2,
//   //             },
//   //           },
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 3,
//   //             },
//   //           },
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 4,
//   //             },
//   //           },
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 5,
//   //             },
//   //           },
//   //         },
//   //       ],
//   //     },
//   //     budgets: {
//   //       create: [
//   //         {
//   //           budget: {
//   //             connect: {
//   //               id: 2,
//   //             },
//   //           },
//   //         },
//   //       ],
//   //     },
//   //     payers: {
//   //       create: [
//   //         {
//   //           payer: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.customCountingItem.create({
//   //   data: {
//   //     name: "明弘個人お小遣い",
//   //     code: "akihiro-personal",
//   //     terms: {
//   //       create: [
//   //         {
//   //           sign: "PLUS",
//   //           coefficient: 1,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.customCountingItem.create({
//   //   data: {
//   //     name: "明弘お小遣い合計",
//   //     code: "akihiro-total",
//   //     terms: {
//   //       create: [
//   //         {
//   //           sign: "PLUS",
//   //           coefficient: 1,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //         {
//   //           sign: "PLUS",
//   //           coefficient: 0.5,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.customCountingItem.update({
//   //   where: {
//   //     id: 3,
//   //   },
//   //   data: {
//   //     name: '月次精算用（明弘）',
//   //     code: 'monthly-akihiro',
//   //     terms: {
//   //       update: [
//   //         {
//   //           sign: 'PLUS',
//   //           coefficient: 1,
//   //           processed: [true, false],
//   //           categories: {
//   //             update: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 4,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 7,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 8,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 9,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 10,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 12,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             update: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             update: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             update: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.customCountingItem.create({
//   //   data: {
//   //     name: '月次精算用（明弘）',
//   //     code: 'monthly-akihiro',
//   //     terms: {
//   //       create: [
//   //         {
//   //           sign: 'PLUS',
//   //           coefficient: 1,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 4,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 7,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 8,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 9,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 10,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.customCountingItem.create({
//   //   data: {
//   //     name: '月次精算用（李沙）',
//   //     code: 'monthly-risa',
//   //     terms: {
//   //       create: [
//   //         {
//   //           sign: 'PLUS',
//   //           coefficient: 1,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 4,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 7,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 8,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 9,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 10,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 4,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.customCountingItem.create({
//   //   data: {
//   //     name: '李沙→明弘',
//   //     code: 'risa-to-akihiro',
//   //     terms: {
//   //       create: [
//   //         {
//   //           // NOTE: 明弘が払った共同支出の1/2
//   //           sign: 'PLUS',
//   //           coefficient: 0.5,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //         {
//   //           // NOTE: 李沙が払った共同支出の1/2
//   //           sign: 'MINUS',
//   //           coefficient: 0.5,
//   //           processed: [true, false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 4,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //         {
//   //           // NOTE: 明弘が払った李沙の個人支出（服一緒に買う時とか）
//   //           sign: 'PLUS',
//   //           coefficient: 1,
//   //           processed: [false],
//   //           categories: {
//   //             create: [
//   //               {
//   //                 category: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           paymentMethods: {
//   //             create: [
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 2,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 5,
//   //                   },
//   //                 },
//   //               },
//   //               {
//   //                 paymentMethod: {
//   //                   connect: {
//   //                     id: 6,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           budgets: {
//   //             create: [
//   //               {
//   //                 budget: {
//   //                   connect: {
//   //                     id: 3,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //           payers: {
//   //             create: [
//   //               {
//   //                 payer: {
//   //                   connect: {
//   //                     id: 1,
//   //                   },
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   },
//   // });
//   // await prisma.favoriteExpendItem.createMany({
//   //   data: [
//   //     {
//   //       id: 8,
//   //       date: '',
//   //       code: 'matsukiyo',
//   //       name: 'マツキヨ',
//   //       price: 0,
//   //       description: 'マツキヨ雑貨',
//   //       categoryId: 2,
//   //       payerId: 1,
//   //       budgetId: 1,
//   //       paymentMethodId: 1,
//   //       processed: false,
//   //     },
//   //   ],
//   // });
//   // await prisma.favoriteExpendItem.delete({
//   //   where: {
//   //     id: 0,
//   //   },
//   // });
//   // await prisma.countingItem.create({
//   //   data: {
//   //     name: '共同支出（明弘支払）',
//   //     code: 'shared-akihiro',
//   //     processed: [true, false],
//   //     paymentMethods: {
//   //       create: [
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 2,
//   //             },
//   //           }
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 3,
//   //             },
//   //           }
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 5,
//   //             },
//   //           }
//   //         },
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 6,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //     budgets: {
//   //       create: [
//   //         {
//   //           budget: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //     payers: {
//   //       create: [
//   //         {
//   //           payer: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //   },
//   // })
//   // await prisma.countingItem.create({
//   //   data: {
//   //     name: '共同支出（李沙支払）',
//   //     code: 'shared-risa',
//   //     processed: [true, false],
//   //     paymentMethods: {
//   //       create: [
//   //         {
//   //           paymentMethod: {
//   //             connect: {
//   //               id: 4,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //     budgets: {
//   //       create: [
//   //         {
//   //           budget: {
//   //             connect: {
//   //               id: 1,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //     payers: {
//   //       create: [
//   //         {
//   //           payer: {
//   //             connect: {
//   //               id: 2,
//   //             },
//   //           }
//   //         },
//   //       ],
//   //     },
//   //   },
//   // })
//   // await prisma.countingItem.delete({
//   //   where: {
//   //     id: 1,
//   //   },
//   // });
// }

const monthlyExpendList = [
  {
    description: 'Netflix',
    price: 1190,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 1,
    payerId: 1,
  },
  {
    description: 'Spotify',
    price: 1280,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 1,
    payerId: 1,
  },
  {
    description: 'google drive',
    price: 290,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 1,
    payerId: 1,
  },
  {
    description: 'abobe',
    price: 1180,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 1,
    payerId: 1,
  },
  {
    description: 'NISAクレカ',
    price: 65000,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 1,
    payerId: 1,
  },
  {
    description: '明弘生命保険',
    price: 9957,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 2,
    payerId: 1,
  },
  {
    description: '明弘スマホ',
    price: 3500,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 2,
    payerId: 1,
  },
  {
    description: '奨学金',
    price: 8500,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 5,
    payerId: 1,
  },
  {
    description: 'サプリ（コレステロール）',
    price: 3000,
    categoryId: 8,
    budgetId: 1,
    paymentMethodId: 5,
    payerId: 1,
  },
];

async function monthly() {
  const targetDate = dayjs().startOf('month').format('YYYY-MM-DD');
  for (const expend of monthlyExpendList) {
    await prisma.expend.create({
      data: {
        date: targetDate,
        price: expend.price,
        description: expend.description,
        categoryId: expend.categoryId,
        budgetId: expend.budgetId,
        paymentMethodId: expend.paymentMethodId,
        payerId: expend.payerId,
      },
    });
  }
}

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

monthly()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
