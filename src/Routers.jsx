'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute,IndexRedirect} from 'react-router'; // 路由
import { browserHistory } from 'react-router';

//首页
import Index from './pages/Index/Index';

//帮助中心
import Help from './pages/Help/Index';
import Update from './pages/Update/Index';

//redux案例展示
import NotFound from './pages/Common/NotFound';
import ReduxDom from './pages/ReduxDom/ReduxDom';
import UI from './pages/UI/Index';

//UI DEMO
import InputDom from './pages/UI/Input'
import ButtonDom from './pages/UI/Button'
import SwitchDom from './pages/UI/Switch'
import SliderDom from './pages/UI/Slider'
import SliderBarDom from './pages/UI/SliderBar'
import SelectDom from './pages/UI/Select'
import RadioDom from './pages/UI/Radio'
import TimePickerDom from './pages/UI/TimePicker'
import DatePickerDom from './pages/UI/DatePicker'
import CheckboxDom from './pages/UI/Checkbox'
import GridDom from './pages/UI/Grid'
import PanelDom from './pages/UI/Panel'
import PageListDom from './pages/UI/Pagelist'
import TipDom from './pages/UI/Tip'
import ModalDom from './pages/UI/Modal'
import DropdownDom from './pages/UI/Dropdown'
import BacktopDom from './pages/UI/Backtop'
import TabsDom from './pages/UI/Tabs'
import Page404Dom from './pages/UI/Page404'

import TagDom from './pages/UI/Tag'
import PopoverDom from './pages/UI/Popover'
import LoadingDom from './pages/UI/Loading'
import ProgressDom from './pages/UI/Progress'
import TreeDom from './pages/UI/Tree'
import UploadDom from './pages/UI/Upload'
import TableDom from './pages/UI/Table'
import CollapseDom from './pages/UI/Collapse'
import PopconfirmDom from './pages/UI/Popconfirm'
import ValidateDom from './pages/UI/Validate'
import SwiperDom from './pages/UI/Swiper'
import IconsDom from './pages/UI/Icons'
import LimitDom from './pages/UI/Limit'

//App为入口
import App from './pages/App';

export default class Routers extends React.Component{
	leavePath(){

	}
	enterPath(){
		document.body.scrollTop = 0;
	}
    render() {
    	const routerMap = [
    		{
    			path: 'input',
    			component: InputDom
    		},
    		{
    			path: 'button',
    			component: ButtonDom
    		},
    		{
    			path: 'switch',
    			component: SwitchDom
    		},
    		{
    			path: 'slider',
    			component: SliderDom
    		},
    		{
    			path: 'sliderbar',
    			component: SliderBarDom
    		},
    		{
    			path: 'select',
    			component: SelectDom
    		},
    		{
    			path: 'radio',
    			component: RadioDom
    		},
    		{
    			path: 'checkbox',
    			component: CheckboxDom
    		},
    		{
    			path: 'datepicker',
    			component: DatePickerDom
    		},
    		{
    			path: 'timepicker',
    			component: TimePickerDom
    		},
    		{
    			path: 'grid',
    			component: GridDom
    		},
    		{
    			path: 'panel',
    			component: PanelDom
    		},
    		{
    			path: 'pageList',
    			component: PageListDom
    		},

    		{
    			path: 'tip',
    			component: TipDom
    		},
    		{
    			path: 'modal',
    			component: ModalDom
    		},
    		{
    			path: 'dropdown',
    			component: DropdownDom
    		},
    		{
    			path: 'backtop',
    			component: BacktopDom
    		},
    		{
    			path: 'tabs',
    			component: TabsDom
    		},
    		{
    			path: 'tag',
    			component: TagDom
    		},
    		{
    			path: 'popover',
    			component: PopoverDom
    		},
    		{
    			path: 'loading',
    			component: LoadingDom
    		},
    		{
    			path: 'progress',
    			component: ProgressDom
    		},
    		{
    			path: 'tree',
    			component: TreeDom
    		},
    		{
    			path: 'collapse',
    			component: CollapseDom
    		},
    		{
    			path: 'upload',
    			component: UploadDom
    		},
    		{
    			path: 'table',
    			component: TableDom
    		},
    		{
    			path: 'popconfirm',
    			component: PopconfirmDom
    		},
    		{
    			path: 'validate',
    			component: ValidateDom
    		},
    		{
    			path: 'swiper',
    			component: SwiperDom
    		},
    		{
    			path: 'icons',
    			component: IconsDom
    		},
    		{
    			path: 'limit',
    			component: LimitDom
    		},
    		{
    			path: '404',
    			component: Page404Dom
    		},
    		{
    			path: 'redux',
    			component: ReduxDom
    		}
    	];
        return (
            <Router history={this.props.history}>
			    <Route onEnter={this.enterPath} onLeave={this.leavePath} path={HOME} component={App}>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"/"} component={Index} />
			      <IndexRoute onEnter={this.enterPath} onLeave={this.leavePath} component={Index} />
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"ui"} component={UI}>
    		        {
    		          	routerMap.map((value,index) => (
    		          		<Route
    		          			key={index}
    		          			onEnter={this.enterPath}
    		          			onLeave={this.leavePath}
    		          			path={value.path}
    		          			component={value.component}
    		          		/>
    		          	))
    		        }
			      </Route>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"help"} component={Help}/>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"update"} component={Update}/>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path="*" component={NotFound}/>
			    </Route>
		  	</Router>
        );
    }
};