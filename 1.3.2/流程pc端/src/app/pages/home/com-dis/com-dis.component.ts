import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../shared/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import status from '../../../shared/state';
import { TransformEtpValService } from '../../../server/transform-etp-val.service';
@Component({
  selector: 'app-com-dis',
  templateUrl: './com-dis.component.html',
  styleUrls: ['./com-dis.component.css']
})
export class ComDisComponent implements OnInit {

  valide=false;
  config;

  noRecord = {
    name: '企业征信报告',
    sheets: [
      {
        g_class_name:'基本信息',
        name: '',
        tables: [
          {
            name: '',
            checked: true,
            tableType: 'normal',
            trs: [
              [
                { name: '企业名称', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '报告日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '中征码', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'entName' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'reportDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'eigenCode' }
              ]
            ]
          }
        ]
      },
      {
        name: '一、信息概要',
        tables: [
          {
            g_class_name: '当前负债信息概要',
            checked: true,
            tableType: 'normal',
            key: 'summary.currentAssetDebt',
            trs: [
              [
                { name: '由资产管理公司处置的债务', colspan: 3, rowspan: 1, ele: 'th' },
                { name: '欠息汇总', colspan: 2, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最近一次处置完成日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额（元）', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'byAssetComHandleCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'byAssetComHandleFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'byAssetComHandleDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'oweInterestCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'oweInterestFee' }
              ]
            ]
          },
          {
            name: '',
            checked: true,
            tableType: 'normal',
            key: 'summary.currentAssetDebt',
            trs: [
              [
                { name: '垫款', colspan: 2, rowspan: 1, ele: 'th' },
                { name: '担保及第三方代偿的债务', colspan: 3, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最近一次还款日期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'advanceCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'advanceFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'guaranteeCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'guaranteeFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'guaranteeClearDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/, placeholder:'日期格式如：20180101' }
              ]
            ]
          },
          {
            name: '',
            checked: true,
            tableType: 'list',
            key: 'summary.currentLoanDebtList',
            trs: [
              [
                { name: '类型', colspan: 1, rowspan: 2, ele: 'th' },
                { name: '正常类汇总', colspan: 2, rowspan: 1, ele: 'th' },
                { name: '关注类汇总', colspan: 2, rowspan: 1, ele: 'th' },
                { name: '不良/违约类汇总', colspan: 2, rowspan: 1, ele: 'th' }
              ],
              [
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'category',options: [{ name: '', val: '' },{ name: '贷款', val: '贷款' }, { name: '类贷款', val: '类贷款' }, { name: '贸易融资', val: '贸易融资' }, { name: '保理', val: '保理' }, { name: '票据贴现', val: '票据贴现' }, { name: '银行承兑汇票', val: '银行承兑汇票' }, { name: '信用证', val: '信用证' }, { name: '保函', val: '保函' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'normalCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'normalBalance' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'attentionCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'attentionBalance' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'problemCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'problemBalance' }
              ]
            ]
          },
          {
            g_class_name: '已还清债务信息概要',
            checked: true,
            key: 'summary.clearedLoanDebtList',
            tableType: 'list',
            trs: [
              [
                { name: '类型', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '不良/违约类笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '关注类笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '正常类笔数', colspan: 1, rowspan: 1, ele: 'th' }            
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'category',options: [{ name: '', val: '' },{ name: '贷款', val: '贷款' },{ name: '类贷款', val: '类贷款' },{ name: '贸易融资', val: '贸易融资' },{ name: '保理', val: '保理' },{ name: '票据贴现', val: '票据贴现' },{ name: '银行承兑汇票', val: '银行承兑汇票' },{ name: '信用证', val: '信用证' },{ name: '保函', val: '保函' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'problemCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'attentionCount' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'normalCount' }
              ]
            ]
          },
          {
            g_class_name: '对外担保信息概要',
            checked: true,
            key: 'summary.guaranteeStatsList',
            tableType: 'list',
            trs: [
              [
                { name: '类型', colspan: 1, rowspan: 2, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 2, ele: 'th' },
                { name: '担保金额', colspan: 1, rowspan: 2, ele: 'th' },
                { name: '所担保主业务余额', colspan: 3, rowspan: 1, ele: 'th' }            
              ],
              [
                { name: '正常', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '关注', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '不良', colspan: 1, rowspan: 1, ele: 'th' },
              ]
              ,
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'category',options: [{ name: '', val: '' },{ name: '保证汇总', val: '保证汇总' },{ name: '抵押汇总', val: '抵押汇总' },{ name: '质押汇总', val: '质押汇总' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'normalFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'attentionFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'problemFee' }
              ]
            ]
          },
          {
            g_class_name: '负债变化历史',
            checked: true,
            key: 'summary.debitHistoryList',
            tableType: 'list',
            trs: [
              [
                { name: '时间', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '全部负债余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '不良负债余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'reportDate',reg:/^[1-9]\d{3}(0[1-9]|1[0-2])$/, placeholder:'日期格式如：201801'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'totalDebitFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'abnormalDebitFee' }
              ]
            ]
          }
        ]
      },
      {
        name:'二、信贷记录明细',
        g_class_name:'当前负债',
        class_name: '不良和违约类债务',
        ztree: true,
        treeShow: false,
        tables: [
          {
            name: '贷款',
            checked: true,
            delete: true,
            tableType: 'list',
            key:'currentDebt.abnormalLoan.loanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '币种', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '借据金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '借据余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'curType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' }
              ]
            ]
          },
          {
            name: '类贷款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.abnormalLoan.otherLoanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类/交易状态', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '业务种类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '币种', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bussType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'curType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' }
              ]
            ]
          },
          {
            name: '贸易融资',
            delete: true,
            checked: false,
            tableType: 'list',
            key:'currentDebt.abnormalLoan.tradeFinancingList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '放款日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '展期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'startDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '保理',
            delete: true,
            checked: false,
            tableType: 'list',
            key:'currentDebt.abnormalLoan.factoringList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'advances',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '银行承兑汇票',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.abnormalLoan.bankAcceptanceList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '出票金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '保证金比例(%)', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bailRate' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'advances' ,options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}]}
              ]
            ]
          },{
            name: '信用证',
            checked: false,
            tableType:'list',
            delete: true,
            key: 'currentDebt.abnormalLoan.letterCredit',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '保证金比例（%）', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '开证金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '可用余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bailRate' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'advances',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '保函',
            checked: false,
            tableType: 'list',
            delete: true,
            key:'currentDebt.abnormalLoan.guaranteeLetter',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '保证金比例（%）', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bailRate' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          }
        ]
      },
      {
        class_name: '关注类债务',
        ztree: true,
        treeShow: false,
        tables: [
          {
            name: '贷款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.attentionLoan.loanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '种类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '借据金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '借据余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bussType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/, placeholder:'日期格式如：20180101' }
              ]
            ]
          },
          {
            name: '贸易融资',
            checked: false,
            tableType: 'list',
            delete: true,
            key:'currentDebt.attentionLoan.tradeFinancingList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '展期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '保理',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.attentionLoan.factoringList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'advances' ,options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}]}
              ]
            ]
          },{
            name: '票据贴现',
            checked: false,
            delete: true,
            key:'currentDebt.attentionLoan.billDiscountedList',
            tableType: 'list',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '贴现金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]}
              ]
            ]
          },{
            name: '银行承兑汇票',
            delete: true,
            checked: false,
            key:'currentDebt.attentionLoan.bankAcceptanceList',
            tableType: 'list',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '出票金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '保证金比例(%)', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bailRate' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '信用证',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.attentionLoan.letterCredit',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '开证金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '可用余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '保证金比例', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bailRate' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension' ,options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}]}
              ]
            ]
          },{
            name: '保函',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.attentionLoan.guaranteeLetter',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '保证金比例', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bailRate' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          }
        ]
      },
      {
        class_name: '正常类债务',
        ztree: true,
        treeShow: false,
        tables: [
          {
            name: '贷款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.loanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '借据金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '借据余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '放款日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '展期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'startDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '类贷款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.otherLoanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '展期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'startDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },
          {
            name: '贸易融资',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.tradeFinancingList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '放款日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '展期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'startDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'extension',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '保理',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.factoringList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '叙做日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'financeDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guarantee',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'advances',options:[{ name: '', val: '' },{name:'有',val:'有'},{name:'无',val:'无'}] }
              ]
            ]
          },{
            name: '票据贴现',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.billDiscountedList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' }
              ]
            ]
          },{
            name: '银行承兑',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.bankAcceptanceList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日<30天余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日<60天余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日<90天余额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日>90天余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'thirtyOverFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'sixtyOverFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'ninetyOverFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'greaterNinetyOverFee' }
              ]
            ]
          },
          {
            name: '信用证',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'currentDebt.normalLoan.letterCredit',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '开证金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '可用金额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' }
              ]
            ]
          },{
            name: '保函',
            delete: true,
            checked: false,
            tableType: 'list',
            key:'currentDebt.normalLoan.guaranteeLetter',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '笔数', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '余额', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'count' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'overFee' }
              ]
            ]
          }
        ]
      },
      {
        class_name:'已还清债务',
        ztree: true,
        treeShow: false,
        tables: [
          {
            name: '担保及第三方代偿信息',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'clearDebt.guarantee',
            trs: [
              [
                { name: '代偿机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '最近代偿日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '累计代偿金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结清日期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'lastCompensatoryDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'totalCompensatoryFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/, placeholder:'日期格式如：20180101' }
              ]
            ]
          },
          {
            name: '欠息',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'clearDebt.interest',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '历史最高欠息金额（元）', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '欠息日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结清日期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'maxFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'financeDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'}
              ]
            ]
          },
          {
            name: '垫款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'clearDebt.advances',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '垫款日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结清日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'advancesOverFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'advancesDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] },
              ]
            ]
          },
          {
            name: '贷款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'clearDebt.clearedLoan.loanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结清日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '还款方式', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'settledMethod',options:[{ name: '', val: '' },{name:'正常收回',val:'正常收回'},{name:'借新还旧',val:'借新还旧'},{name:'资产剥离',val:'资产剥离'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] }
              ]
            ]
          },
          {
            name: '类贷款',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'clearDebt.clearedLoan.otherLoanList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '业务种类', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结清日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类/交易状态', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'bussType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }] }
              ]
            ]
          },
          {
            name: '贸易融资',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'clearDebt.clearedLoan.tradeFinancingList',
            trs: [
              [
                { name: '授信机构', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '融资金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '到期日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '结清日期', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '还款方式', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '五级分类', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'institution' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'expiredDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'settledDate',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'},
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'settledMethod',options:[{ name: '', val: '' },{name:'正常收回',val:'正常收回'},{name:'借新还旧',val:'借新还旧'},{name:'资产剥离',val:'资产剥离'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'classify',options:[{ name: '', val: '' },{ name: '正常', val: '正常' }, { name: '关注', val: '关注' }, { name: '次级', val: '次级' }, { name: '可疑', val: '可疑' }, { name: '损失', val: '损失' }]}
              ]
            ]
          },
          {
            name: '对外担保记录',
            checked: false,
            delete: true,
            tableType: 'list',
            key:'guaranteeRecordList',
            trs: [
              [
                { name: '类型', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '被担保人', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '证件类型', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保金额', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '担保形式', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'bussType',options:[{ name: '', val: '' },{name:'保证汇总',val:'保证汇总'},{name:'抵押汇总',val:'抵押汇总'},{name:'质押汇总',val:'质押汇总'}] },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'guarantor' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'cardType' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'guaranteeFee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'select', value: '', key: 'guaranteeMethod',options:[{ name: '', val: '' },{name:'多人担保',val:'多人担保'},{name:'单人担保',val:'单人担保'},{name:'抵押物担保',val:'抵押物担保'},{name:'质押物担保',val:'质押物担保'}] }
              ]
            ]
          }
        ]
      },
      {
        name: '三、公共信息明细',
        tables: [
          {
            g_class_name: '欠税记录',
            checked: true,
            tableType: 'list',
            key:'common.taxOwedList',
            trs: [
              [
                { name: '主管税务机关', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '欠税总额（元）', colspan: 1, rowspan: 1, ele: 'th' },
                { name: '欠税统计日期', colspan: 1, rowspan: 1, ele: 'th' }
              ],
              [
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'office' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'fee' },
                { colspan: 1, rowspan: 1, ele: 'td', input: 'text', value: '', key: 'recordTime',reg:/^((?!0000)[0-9]{4}((0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)0229)$/ , placeholder:'日期格式如：20180101'}
              ]
            ]
          }
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

  constructor(private http: HttpService, private router: Router, public activeRoute: ActivatedRoute, private cookie: CookieService, private transVal: TransformEtpValService) {
    this.activeRoute.queryParams.subscribe(e => {
      this.pageState = e;
      this.product=this.pageState.product;
    });
    this.claim();
    this.operator = this.cookie.get(status.loginName);
  }

  ngOnInit() {
    setInterval(()=>{
      this.save();
    },10000);
    this.config = this.getDis();
    this.downCredit();
  }

  claim() {
    this.http.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, { action: 'claim' })
      .subscribe(() => {
        this.operator = this.cookie.get(status.loginName);
      })
  }

  cal() {
    this.router.navigate(['/app/present/selfDis'],{queryParams:{'taskId':this.pageState.taskId,'processInsId':this.pageState.processInsId,'type':this.pageState.type,'product': this.product}})
  }

  save() {
    for(let i=0;i<status.disList.length;i++){
      if(status.disList[i].taskId==this.pageState.taskId){
        status.disList[i].disTable.etp = this.config;
        status.disList[i].dis.etp = this.transVal.getVal(this.config);
      }
    }
  }

  getDis(){
    for(let i=0;i<status.disList.length;i++){
      if(status.disList[i].taskId==this.pageState.taskId&&status.disList[i].disTable.etp){
        return status.disList[i].disTable.etp
      }
    }
    return this.noRecord;
  }

  sure() {
    this.save();
    this.router.navigate(['/app/present/presentTable'],{queryParams:{'taskId':this.pageState.taskId,'processInsId':this.pageState.processInsId,'type':this.pageState.type,'product': this.product}})
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

  getValide(e){
    this.valide=e;
  }

  downCredit() {
    this.http.getCustomHeaders("/v1/flow/process/"+this.pageState.processInsId+"/variables")
    .subscribe(
      {
        next: (e) => {
          this.downCreditUrl=e.data.corporateCreditUrls;
          this.operator = e.data.assignee;
        },
        error: (err) => this.loading = false,
        complete: () => this.loading = false
      }
    )
    // let credit=[];
    // this.http.getCustomHeaders('/v1/flow/process/' + this.pageState.processInsId + '/variables')
    //   .subscribe({
    //     next: e => {
    //       credit.push(JSON.parse(e.data.creditFileName).corporateUrl);
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
