import React, {Component} from 'React';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './jobpages1.scss';
class Jobpages1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            pingjia: [],
            zwyh: '请大开脑洞,该有的都有,团队带你飞,体系健全',
            compnydetail:{
               logoUrl: 'https://static.lagou.com/',
               title: '',
               spans:'数据服务,企业服务/ 天使轮/ 15-50人',
            },
            content:[
                 {
                     title: '项目职责',
                     list:[
                         "1.负责互联网金融平台网站和移动APP功能设计和需求管理；负责网站交易流程和业务流程的设计；",
                         "2.进行产品项目管理，落实和控制实施进度，协调各部门推进产品研发；",
                         "3.关注并研究竞争对手和行业最新动态，研究了解客户需求及市场前景；",
                         "4.参与新产品营销方案，协助营销部门推进产品的市场占有率。"
                     ]
                 },
                 {
                    title: '岗位要求',
                    list:[
                        "1.负责互联网金融平台网站和移动APP功能设计和需求管理；负责网站交易流程和业务流程的设计；",
                        "2.进行产品项目管理，落实和控制实施进度，协调各部门推进产品研发；",
                        "3.关注并研究竞争对手和行业最新动态，研究了解客户需求及市场前景；",
                        "4.参与新产品营销方案，协助营销部门推进产品的市场占有率。"
                    ]
                }
            ],
            list: [
                {
                    icon: 'renminbi',
                    name: '15k-20k',
                },
                {
                    icon: 'icon32203',
                    name: this.props.location.state ? this.props.location.state.city : ''
                },
                {
                    icon: 'quanzhi',
                    name: '全职'
                },
                {
                    icon: 'jingyan',
                    name: '1-3年'
                },
                {
                    icon: 'benkesheng',
                    name: '本科'
                }
            ]
        }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render () {
        console.log(this.props);
        const { state } = this.props.location; 
        return (
            <div className="jobpages1">
                <h4>
                    <span onClick={() => this.props.history.go(-1)}><Icon type="left" /></span>
                    <span>职位详情</span>
                    <Link to="/hello">
                      <i className="icon iconfont icon-shouye"></i>
                    </Link>
                </h4>
                <div className="job_scroller">
                <div className="job_title">
                    <h3>{state.positionName}</h3><dl><dt>☆</dt><dd>收藏</dd></dl>
                </div>
                <div className="job_list">
                    {
                        this.state.list.map((ele, index) => {
                            return (
                                <p key={index}><i className={`icon iconfont icon-${ele.icon}`}></i>{ele.name}</p>
                            )
                        })
                    }    
                </div>
                <div className="job_zwyh">
                     <p>职位诱惑：{this.state.zwyh}</p>
                </div>
                <div className="hello_section">
                    <div className="hello_dl">
                        <dl>
                            <dt><img  src={ this.state.compnydetail.logoUrl + this.props.location.state.companyLogo} alt="images"/></dt>
                            <dd>
                                <div className="hello_dl_left">
                                        <h2>{this.props.location.state.companyName}</h2>
                                        <span>{this.state.compnydetail.spans}</span>
                                </div>
                                <div className="hello_dl_right">
                                        {/* <b>{ele.salary}</b> */}
                                </div>
                            </dd>
                        </dl>
                    </div>   
                </div>  
                <div className="job_zhiweimiaosu">
                     职位描述
                </div>
                <div className="job_section">
                    {
                        this.state.content.map((ele, index) => {
                           return (
                              <div className="job_section_title" key={index}>
                                  <li>{ele.title}</li>
                                  {
                                      ele.list.map((eles, index) => {
                                          return (
                                              <p key={index}>{eles}</p>
                                          )
                                      })
                                  }
                              </div>
                           )
                        })
                    }
                     
                </div>
                <div className="job_zhiweimiaosu">
                     面试评价({this.state.pingjia.length})
                </div>
                <div>
                    <small>{
                        this.state.pingjia.length === 0 ? "暂无任何评价": ""
                    }</small>
                </div>
                
                </div>
                <div className="job_footer">
                    <button>投递简历</button>
                </div>
            </div>
        )
    }
}
export default Jobpages1;