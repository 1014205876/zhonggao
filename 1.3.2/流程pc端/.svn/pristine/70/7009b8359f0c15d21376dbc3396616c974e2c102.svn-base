import Mock from 'mockjs';
import {environment} from '../../environments/environment';
import status from '../shared/state';
if(!status.test){
    Mock.mock(/\login/, {
        'result':{
            'type':'asd',
            'token':'zxc',
            'user':Mock.mock('@cname')
        }
    })
    
    Mock.mock(/\/v1\/flow\/task\/\d{0,}\/variables/, {
        'data':{
            'claim':true,
            'actName|+1':['征信拆解','预约确认','尽职调查','审批登记','合规审批','自动发标'],
            'processInsId':'@id',
            'entName':'@csentence(3, 5)',
            'amount':'@natural(1, 100)',
            'productName':'@csentence(3, 5)',
            'creatTime':'@date("yyyy-MM-dd")',
            'operatorName':'@cname()',
            'taskId':'@natural(1, 100000)'
        }
    })

    Mock.mock(/\/v1\/flow\/process\/\d{0,}\/variables/, {
        'data':{
            'entName':'@csentence(3, 5)',
            'customerType':'@cword(2)',
            'legalRep':'@cname()',
            'legalPhone':'@natural(11)',
            'legalCardNo':'@natural(18)',
            'legalSex|1':['男','女'],
            'legalBirth':'@date("yyyy-MM-dd")',
            'legalNation':'@county()',
            'legalAddress':'@cword(10)'
        }
    })

    Mock.mock(/\/v1\/flow\/task/, {
        'data|0-6':[
            {
                'actName|+1':['征信拆解','预约确认','尽职调查','审批登记','合规审批','自动发标'],
                'processInsId':'@id',
                'entName':'@csentence(3, 5)',
                'amount':'@natural(1, 100)',
                'productName':'@csentence(3, 5)',
                'creatTime':'@date("yyyy-MM-dd")',
                'operatorName':'@cname()',
                'taskId':'@natural(1, 100000)'
            }
        ]
    })
    
}