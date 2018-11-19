import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../shared/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import status from '../../../shared/state';
import { TransformSelValService } from '../../../server/transform-sel-val.service';

@Component({
  selector: 'app-self-dis',
  templateUrl: './self-dis.component.html',
  styleUrls: ['./self-dis.component.css']
})
export class SelfDisComponent implements OnInit {

  valide = false;

  config;

  noRecord = {
    name: '个人征信报告',
    sheets: [
      {
        name: '报告信息',
        tables: [
          {
            name: '',
            checked: true,
            tableType: 'normal',
            trs: [
              [
                { name: '被查询者姓名', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '被查询者证件类型', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '被查询者证件号码', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '报告时间', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '',key: 'name' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'cardType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'cardNo' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'reportTime',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/, placeholder:'日期格式如：20180101' }
              ]
            ]
          }

        ]
      },
      {
        name: '一、个人基本信息',
        tables: [
          {
            g_class_name: '身份信息',
            checked: true,
            tableType: 'normal',
            key: 'self',
            trs: [
              [
                { name: '婚姻状况', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '学历', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '学位', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '通信地址', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '户籍地址', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'maritalStatus', options: [{ name: '已婚', val: '已婚' }, { name: '未婚', val: '未婚' }, { name: '离异', val: '离异' }, { name: '丧偶', val: '丧偶' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'education', options: [{ name: '小学', val: '小学' }, { name: '初中', val: '初中' }, { name: '高中', val: '高中' }, { name: '本科', val: '本科' }, { name: '专科', val: '专科' }, { name: '硕士', val: '硕士' }, { name: '博士', val: '博士' }, { name: '博士后', val: '博士后' }, { name: '其他', val: '其他' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'degree' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'address' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'houseAddress' }
              ]
            ]
          },
          {
            g_class_name: '居住信息',
            checked: true,
            key: 'addressList',
            tableType: 'list',
            trs: [
              [
                { name: '居住地址', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '居住状况', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '信息更新日期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'address' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'status' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'updateTime',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'}
              ]
            ]
          }
        ]
      },
      {
        name: '二、信息概要',
        tables: [
          {
            g_class_name: '逾期及违约信息概要',
            checked: true,
            multilayer: true,
            key: 'creditSummary.overdueStats',
            tableType: 'normal',
            trs: [
              [
                { name: '贷款逾期', colspan: 4, rowspan: 1, ele: 'th' },
                { name: '贷记卡逾期', colspan: 4, rowspan: 1, ele: 'th' },
                { name: '准贷记卡60天以上透支 ', colspan: 4, rowspan: 1, ele: 'th' },
              ],
              [
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '月份数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '单月最高逾期总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最长逾期数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '账户数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '月份数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '单月最高逾期总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最长逾期数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '账户数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '月份数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '单月最高逾期总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最长逾期数', colspan: 1, rowspan: 1, ele: 'th' },
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count', belong: 0 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthCount', belong: 0 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthMaxFee', belong: 0 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxOverdueMonth', belong: 0 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthCount', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthMaxFee', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxOverdueMonth', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count', belong: 2 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthCount', belong: 2 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthMaxFee', belong: 2 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxOverdueMonth', belong: 2 }
              ]
            ]
          },
          {
            g_class_name: '授信及负债信息概要',
            checked: true,
            tableType: 'normal',
            key: 'creditSummary.unclearedLoanStats',
            trs: [
              [
                { name: '未结清贷款信息汇总', colspan: 3, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '合同金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'totalFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' }
              ]
            ]
          },
          {
            name: '',
            checked: true,
            tableType: 'normal',
            key: 'creditSummary.debitCardStats',
            trs: [
              [
                { name: '未销户贷记卡信息汇总', colspan: 3, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '授信总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '单家行最高授信总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '已用额度', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'totalCreditFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxCreditFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'usedFee' }
              ]
            ]
          },
          {
            name: '',
            checked: true,
            tableType: 'normal',
            key: 'creditSummary.semiCardStats',
            trs: [
              [
                { name: '未销户准贷记卡信息汇总', colspan: 3, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '授信总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '单家行最高授信总额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '透支余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'totalCreditFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxCreditFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overDrawFee' }
              ]
            ]
          }
        ]
      },
      {
        name: '三、信贷交易信息明细',
        ztree: true,
        treeShow: false,
        tables: [
          {
            g_class_name: '贷款',
            tableType: 'loan',
            checked: false,
            key: 'loanList',
            tables: [
              {
                overdue: {
                  tableType: 'list',
                  key: 'overdueList',
                  trs: [
                    [
                      { name: '逾期月份', colspan: 1, rowspan: 1, ele: 'th' },
                      { name: '逾期持续月数', colspan: 1, rowspan: 1, ele: 'th' },
                      { name: '逾期金额', colspan: 1, rowspan: 1, ele: 'th' },
                    ],
                    [
                      { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/ , placeholder:'日期格式如：201801'},
                      { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthCount' },
                      { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' }
                    ]
                  ]
                },
                overdueTrs: '',
                overdueDate: [
                  { name: '逾期记录开始时间', colspan: 2, rowspan: 1, ele: 'th' },
                  { colspan: 4, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueRecordStartDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/ , placeholder:'日期格式如：201801'},
                  { name: '逾期记录结束时间', colspan: 2, rowspan: 1, ele: 'th' },
                  { colspan: 4, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueRecordEndDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/ , placeholder:'日期格式如：201801'},
                ],
                trs: [
                  [
                    { name: '业务类型', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '本金余额', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '剩余还款期数', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '本月应还款', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '应还款日', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '本月实还款', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '最近一次还款日期', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '当前逾期期数', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '逾期31-60天未还本金', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '逾期61－90天未还本金', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '逾期91－180天未还本金', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '逾期180天以上未还本金', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '是否有历史逾期记录', colspan: 1, rowspan: 1, ele: 'th' }
                  ], [
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'loanType', options: [{ name: '', val: '' },{ name: '个人住房贷款', val: '个人住房贷款' }, { name: '个人汽车贷款', val: '个人汽车贷款' }, { name: '经营性贷款', val: '经营性贷款' }, { name: '消费贷款', val: '消费贷款' }] },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify', options: [{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'loanPeriod' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthRepaymentFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'repaymentTime' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'realMonthRepaymentFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'lastRepaymentTime' ,reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/, placeholder:'日期格式如：20180101'},
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueCount' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'unpaidPrincipalFeeOne' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'unpaidPrincipalFeeTwo' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'unpaidPrincipalFeeThree' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'unpaidPrincipalFeeFour' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'radio', value: 'false', useless: true, key: this.randomKey(), options: [{ name: '是', val: 'true', checked: true }, { name: '否', val: 'false' }] }
                  ]
                ]
              }
            ]
          },
          {
            g_class_name: '贷记卡',
            tableType: 'loan',
            checked: false,
            key: 'debitCardList',
            tables: [
              {
                overdue: {
                  tableType: 'list',
                  key: 'overdueList',
                  trs: [
                    [
                      { name: '逾期月份', colspan: 1, rowspan: 1, ele: 'th' },
                      { name: '逾期持续月数', colspan: 1, rowspan: 1, ele: 'th' },
                      { name: '逾期金额', colspan: 1, rowspan: 1, ele: 'th' }
                    ],
                    [
                      { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/ , placeholder:'日期格式如：201801'},
                      { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthCount' },
                      { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' }
                    ]
                  ]
                },
                overdueTrs: '',
                overdueDate: [
                  { name: '逾期记录开始时间', colspan: 2, rowspan: 1, ele: 'th' },
                  { colspan: 3, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'replyRecordStartDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/, placeholder:'日期格式如：201801' },
                  { name: '逾期记录结束时间', colspan: 2, rowspan: 1, ele: 'th' },
                  { colspan: 4, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'replyRecordEndDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/ , placeholder:'日期格式如：201801'}
                ],
                trs: [
                  [
                    { name: '共享额度', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '已用额度', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '最近6个月平均使用额度', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '最大使用额度', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '本月应还款', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '账单日', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '本月实还款', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '最近一次还款日期', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '当前逾期期数', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '当前逾期金额', colspan: 1, rowspan: 1, ele: 'th' },
                    { name: '是否有历史逾期记录', colspan: 1, rowspan: 1, ele: 'th' }
                  ], [
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'sharedCreditLine' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'usedFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'averageUsedFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxUsedFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthRepaymentFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'repaymentTime' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'realMonthRepaymentFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'lastRepaymentTime',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueCount' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdueFee' },
                    { colspan: 1, rowspan: 1, ele: 'td', input: 'radio', value: 'false', useless: true, key: this.randomKey(), options: [{ name: '是', val: 'true', checked: true }, { name: '否', val: 'false' }] }
                  ]
                ]
              }
            ]
          },
          {
            g_class_name: '准贷记卡',
            tableType: 'list',
            delete: true,
            key: 'semiDebitCardList',
            checked: false,
            trs: [
              [
                { name: '共享额度', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '透支余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最近6个月平均透支余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最大透支余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '账单日', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '本月实还款', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最近一次还款日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '透支180天以上未付余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'sharedAmount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdrawAmount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'averageOverdrawFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxOverdrawFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'repaymentTime',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'realMonthRepaymentFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'lastRepaymentTime',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overdrawUnpaidBalance' }
              ]
            ]
          },
          {
            g_class_name: '担保信息',
            tableType: 'list',
            delete: true,
            key: 'guaranteeLoan',
            checked: false,
            trs: [
              [
                { name: '担保贷款合同金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保贷款发放日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保贷款到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保贷款本金金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保贷款五级分类', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'contractAmount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'date',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maturityDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'amount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'loanAmount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify', options: [{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] }
              ]
            ]
          }
        ]
      },
      {
        name: '四、公共信息明细',
        ztree: true,
        treeShow: false,
        tables: [
          {
            g_class_name: '强制执行记录',
            checked: false,
            delete: true,
            key: 'actUnderCoercion',
            tableType: 'normal',
            trs: [
              [
                { name: '执行法院', colspan: 2, rowspan: 1, ele: 'th' },
                { name: '执行案由', colspan: 2, rowspan: 1, ele: 'th' },
                { name: '立案日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结案方式', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 2, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'executiveCourt' },
                { colspan: 2, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'causeOfAction' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'registerDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settlementWay' },
              ],
              [
                { name: '案件状态', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结案日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '申请执行标的', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '申请执行标的价值', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '已执行标的', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '已执行标的金额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'caseState' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settlementDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'objectOfExecution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'objectOfExecutionValue' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'executedTarget' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'executedTargetAmount' }
              ]
            ]
          },
          {
            g_class_name: '住房公积金参缴记录',
            checked: false,
            delete: true,
            key: 'houseFundList',
            tableType: 'list',
            trs: [
              [
                { name: '缴费状态', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '月缴存额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'state', options: [{ name: '', val: '' },{ name: '缴交', val: '缴交' }, { name: '销户', val: '销户' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'monthPaymentFee' }
              ]
            ]
          }
        ]
      },
      {
        name: '五、查询记录',
        tables: [
          {
            g_class_name: '查询记录汇总',
            checked: true,
            tableType: 'normal',
            key: 'searchRecord',
            trs: [
              [
                { name: '最近1个月内的查询机构数', colspan: 2, rowspan: 1, ele: 'th' },
                { name: '最近1个月内的查询次数', colspan: 3, rowspan: 1, ele: 'th' },
                { name: '最近2年内的查询次数', colspan: 3, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '贷款审批', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '信用卡审批', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '贷款审批', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '信用卡审批', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '本人查询', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '贷后管理', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保资格审查', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '特约商户实名审查', colspan: 1, rowspan: 1, ele: 'th' },
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institutionSearchByLoan', belong: 0 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institutionSearchByCreditCard', belong: 0 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'searchByLoan', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'searchByCreditCard', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'searchBySelf', belong: 1 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'searchByPostLoan', belong: 2 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'searchByGuarantee', belong: 2 },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'searchBySpecialMerchant', belong: 2 }
              ]
            ]
          },
          {
            g_class_name: '信贷审批查询记录明细',
            tableType: 'normal',
            key: 'loanApprovalRecordList',
            checked: true,
            trs: [
              [
                { name: '总查询记录数量', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '非银行查询数量', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '非银行查询机构数量', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'totalQueriesNumber' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'queriesNumber' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'queriesOrganizationNumber' }
              ]
            ]
          },

        ]
      }
    ]
  };

  loading = false;

  @ViewChild('warning') warning;

  pageState;
  product;

  operator;

  mask;
  downCreditUrl;

  constructor(private http: HttpService, private router: Router, public activeRoute: ActivatedRoute, private cookie: CookieService, private transVal: TransformSelValService) {
    this.activeRoute.queryParams.subscribe(e => {
      this.pageState = e;
      this.product = this.pageState.product;
    });
    this.claim();
    this.operator = this.cookie.get(status.loginName);
  }

  ngOnInit() {
    setInterval(()=>{
      this.save();
    },10000);
    // console.log(status.disList)
    this.config = this.getDis();
    // console.log(this.getDis())
    this.downCredit();
  }

  claim() {
    this.http.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, { action: 'claim' })
      .subscribe(() => {
        this.operator = this.cookie.get(status.loginName);
      })
  }

  cal() {
    this.router.navigate(['/app/present'],{queryParams:{'form':'1','product': this.product}})
  }

  save() {
    if(status.disList.length>0){
      for(let i=0;i<status.disList.length;i++){
        if(status.disList[i].taskId==this.pageState.taskId){
          status.disList[i].disTable.self = this.config;
          status.disList[i].dis.self = this.transVal.getVal(this.config);
        }else{
          status.disList.push({
            taskId:this.pageState.taskId,
            disTable:{
              self:this.config
            },
            dis:{
              self:this.transVal.getVal(this.config)
            }
          })
        }
      }
    }else{
      status.disList.push({
        taskId:this.pageState.taskId,
        disTable:{
          self:this.config
        },
        dis:{
          self:this.transVal.getVal(this.config)
        }
      })
    }
  }

  getDis(){
    for(let i=0;i<status.disList.length;i++){
      if(status.disList[i].taskId==this.pageState.taskId){
        return status.disList[i].disTable.self
      }
    }
    return this.noRecord;
  }

  sure() {
    this.save();
    this.router.navigate(['/app/present/comDis'], { queryParams: { 'taskId': this.pageState.taskId, 'processInsId': this.pageState.processInsId, 'type': this.pageState.type, 'product': this.product } })
  }

  randomKey() {
    var N = 32;
    var arr = [];
    var ranArr = [];
    for (var i = 0; i < N; i++) {
      arr[i] = i;
    }
    do {
      var index = Math.floor(Math.random() * arr.length);
      var flag = true;
      ranArr.push(arr[index]);
      arr.splice(index, 1);
      if (arr.length == 0) {
        flag = false;
      }
    } while (flag);
    return ranArr;
  }

  getValide(e) {
    this.valide = e;
  }

  downCredit() {
    this.http.getCustomHeaders("/v1/flow/process/"+this.pageState.processInsId+"/variables")
    .subscribe(
      {
        next: (e) => {
          this.downCreditUrl=e.data.controllerCreditUrls;
          this.operator = e.data.assignee;
        },
        error: (err) => this.loading = false,
        complete: () => this.loading = false
      }
    )
    // let credit = [];
    // this.http.getCustomHeaders('/v1/flow/process/' + this.pageState.processInsId + '/variables')
    //   .subscribe({
    //     next: e => {
    //       console.log(e)
    //       if(e.data.creditFileName){
    //         credit.push(JSON.parse(e.data.creditFileName).controllerUrl);
    //       }
    //       var a = document.createElement("a"), //创建a标签
    //         event = document.createEvent("MouseEvents"); //创建鼠标事件对象
    //       event.initEvent("click", false, false); //初始化事件对象
    //       a.href = credit[0]; //设置下载地址
    //       a.dispatchEvent(event); //给指定的元素，执行事件click事件
    //     },
    //     error: (err) => this.loading = false,
    //     complete: () => this.loading = false
    //   })
  }

}
