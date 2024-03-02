import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       email: `dayoshii27@gmail.com`,
  //       role: "ADMIN",
  //     },
  //     {
  //       email: `yayr1015@gmail.com`,
  //       role: "USER",
  //     },
  //   ]
  // });
  // await prisma.category.createMany({
  //   data: [
  //     { name: '自動車維持費', code: 'car' },
  //     // { name: "雑貨", code: "goods" },
  //     // { name: "お小遣い", code: "personal" },
  //     // { name: "その他", code: "others" },
  //     // { name: "貯金", code: "savings" },
  //     // { name: "旅行", code: "travel" },
  //     // { name: "イベント", code: "event" },
  //     // { name: "毎月", code: "monthly" },
  //     // { name: "電気代", code: "electric" },
  //     // { name: "水道ガス", code: "utility" },
  //     // { name: "ちばぎん", code: "chibagin" },
  //   ],
  // });
  // await prisma.budget.createMany({
  //   data: [
  //     { name: "共同支出", code: "shared" },
  //     { name: "明弘個人", code: "akihiro" },
  //     { name: "李沙個人", code: "risa" },
  //   ],
  // });
  // await prisma.paymentMethod.createMany({
  //   data: [
  //     { name: "VISA（8119）", code: "visa8119" },
  //     { name: "JCB（1323）", code: "jcb1323" },
  //     { name: "明弘現金", code: "cash-akihiro" },
  //     { name: "李沙現金", code: "cash-risa" },
  //     { name: "みずほ振替", code: "mizuho" },
  //     { name: "ちば銀行振替", code: "chibagin" },
  //   ],
  // });
  // await prisma.payer.createMany({
  //   data: [
  //     { name: "明弘", code: "akihiro" },
  //     { name: "李沙", code: "risa" },
  //   ],
  // });
  // await prisma.expend.createMany({
  //   data: [
  //     {
  //       date: '2023-11-02',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 2,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-03',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 3,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-04',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 4,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-05',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 5,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-06',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 6,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-07',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 7,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-08',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 8,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-09',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 9,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-10',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 10,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //     {
  //       date: '2023-11-11',
  //       price: 1000,
  //       description: "test",
  //       categoryId: 11,
  //       budgetId: 1,
  //       paymentMethodId: 1,
  //       payerId: 1,
  //     },
  //   ]
  // })
  // await prisma.countingItem.create({
  //   data: {
  //     name: 'サンプル集計項目1（共同visa明弘）',
  //     code: 'sample1',
  //     processed: [true, false],
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     budgets: {
  //       create: [
  //         {
  //           budget: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     payers: {
  //       create: [
  //         {
  //           payer: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //   },
  // })
  // await prisma.customCountingItemTerm.create({
  //   data: {
  //     sign: "PLUS",
  //     coefficient: 1,
  //     processed: [true, false],
  //     categories: {
  //       create: [
  //         {
  //           category: {
  //             connect: {
  //               id: 3,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 1,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 2,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 3,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 4,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 5,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     budgets: {
  //       create: [
  //         {
  //           budget: {
  //             connect: {
  //               id: 2,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     payers: {
  //       create: [
  //         {
  //           payer: {
  //             connect: {
  //               id: 1,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "明弘個人お小遣い",
  //     code: "akihiro-personal",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "明弘お小遣い合計",
  //     code: "akihiro-total",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           sign: "PLUS",
  //           coefficient: 0.5,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.update({
  //   where: {
  //     id: 3,
  //   },
  //   data: {
  //     name: "月次精算用（明弘）",
  //     code: "monthly-akihiro",
  //     terms: {
  //       update: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             update: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 7,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 8,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 9,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 10,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 12,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             update: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             update: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             update: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "月次精算用（明弘）",
  //     code: "monthly-akihiro",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 7,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 8,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 9,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 10,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "月次精算用（李沙）",
  //     code: "monthly-risa",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 7,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 8,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 9,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 10,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "李沙→明弘",
  //     code: "risa-to-akihiro",
  //     terms: {
  //       create: [
  //         { // NOTE: 明弘が払った共同支出の1/2
  //           sign: "PLUS",
  //           coefficient: 0.5,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         { // NOTE: 李沙が払った共同支出の1/2
  //           sign: "MINUS",
  //           coefficient: 0.5,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         { // NOTE: 明弘が払った李沙の個人支出（服一緒に買う時とか）
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  await prisma.favoriteExpendItem.createMany({
    data: [
      {
        id: 0,
        date: '',
        code: 'aeonfood',
        name: 'イオン食材',
        price: 0,
        description: 'イオン',
        categoryId: 1,
        payerId: 1,
        budgetId: 1,
        paymentMethodId: 1,
        processed: false,
      },
      {
        id: 1,
        date: '',
        code: 'akihiro7',
        name: '明弘７',
        price: 0,
        description: '7:',
        categoryId: 3,
        payerId: 1,
        budgetId: 2,
        paymentMethodId: 1,
        processed: false,
      },
      {
        id: 2,
        date: '',
        code: 'akihiroprivate',
        name: '明弘個人',
        price: 0,
        description: '',
        categoryId: 3,
        payerId: 1,
        budgetId: 2,
        paymentMethodId: 1,
        processed: false,
      },
    ],
  });
  // await prisma.countingItem.create({
  //   data: {
  //     name: '共同支出（明弘支払）',
  //     code: 'shared-akihiro',
  //     processed: [true, false],
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 2,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 3,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 5,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 6,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     budgets: {
  //       create: [
  //         {
  //           budget: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     payers: {
  //       create: [
  //         {
  //           payer: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //   },
  // })
  // await prisma.countingItem.create({
  //   data: {
  //     name: '共同支出（李沙支払）',
  //     code: 'shared-risa',
  //     processed: [true, false],
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 4,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     budgets: {
  //       create: [
  //         {
  //           budget: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     payers: {
  //       create: [
  //         {
  //           payer: {
  //             connect: {
  //               id: 2,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //   },
  // })
  // await prisma.countingItem.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
