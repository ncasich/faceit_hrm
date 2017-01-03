import React, {Component} from 'react'
import './user-single.scss';
import  Download from 'material-ui/svg-icons/file/file-download';
import Work from 'material-ui/svg-icons/action/work';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import UserStore from '../../../../../../../react/stores/UserStore';
import UserActions from '../../../../../../../react/actions/UserActions';

function getStateFromFlux() {
    return UserStore.getUser()
}

const UserSingle = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount() {
        this.type = 'USER_DATA';
        this.event = this.type + '_LOADED';
        UserActions.loadUserData(this.props.params.id);
    },

    componentDidMount() {
        UserStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        UserStore.removeChangeListener(this.event, this._onChange);
    },

    _onChange() {
        this.setState(getStateFromFlux());
    },
    render() {
        let route = this.props.routes[this.props.routes.length - 1];
        let user = this.state.user;
        if (route.path == 'edit') {
            var children = React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {
                    user: user
                })
            });
            return <div className="container">{children}</div>
        } else {
            let progress_class = 'progress-bar-' + this.state.user.completeness_class;

            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="container-fluid">
                            <div className="col-md-4">
                                <div className="row text-center">
                                    <strong>
                                        Источник резюме:
                                    </strong>
                                    <div className="row text-center">
                                        <a href={user.cv_src}>
                                            {user.cv_src}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="progress item-shadow">
                                    <div aria-valuemax="100" aria-valuemin="0"
                                         aria-valuenow="50"
                                         className={progress_class + " progress-bar progress-bar-striped active"}
                                         role="progressbar" style={{width: user.completeness + '%'}}>
                                        {user.completeness + '%'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-fluid">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>{user.last_name} {user.first_name}</strong>
                                    </div>
                                    <div className="col-md-6">
                                        EDIT BACK
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Желаемая должность:</div>
                                        <div className="col-md-8">{user.position}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Дата рождения:</div>
                                        <div className="col-md-8">{user.birthday}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Город:</div>
                                        <div className="col-md-8">{user.residence}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right"><img src="/icon/email.png" alt="Email: "/>
                                        </div>
                                        <div className="col-md-8">{user.email}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right"><img src="/icon/phone.png" alt="Phone: "/>
                                        </div>
                                        <div className="col-md-8">{user.phone}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right"><img src="/icon/skype.png" alt="Skype: "/>
                                        </div>
                                        <div className="col-md-8">{user.skype}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right"><img src="/icon/linkedin.png"
                                                                                  alt="LinkedIn: "/></div>
                                        <div className="col-md-8">{user.linkedin}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right"><img src="/icon/fb.png" alt="Facebook:"/>
                                        </div>
                                        <div className="col-md-8">{user.facebook}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right"><img src="/icon/vk.png" alt="Вконтакте: "/>
                                        </div>
                                        <div className="col-md-8">{user.vk}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Примечание:</div>
                                        <div className="col-md-8">{user.notes}</div>
                                    </div>

                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Владение языками:</div>
                                        <div className="col-md-8">{user.lang}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Зарплатные ожидания:</div>
                                        <div className="col-md-8">{user.salary}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Опыт работы:</div>
                                        <div className="col-md-8">{user.company}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Образование:</div>
                                        <div className="col-md-8">{user.education}</div>
                                    </div>
                                    <div className="row user-feature">
                                        <div className="col-md-4 text-right">Дополнительная информация:</div>
                                        <div className="col-md-8">{user.about}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row avatar-container">
                                    <img src={"/uploads/img/" + user.id} alt="User Avatar"
                                         className="img img-thumbnail user-avatar item-shadow"/>
                                </div>

                                <div className="row user-buttons">
                                    <RaisedButton label="Скачать резюме" className="item-shadow"
                                                  backgroundColor="#3cb521"
                                                  labelColor="#fff"
                                                  icon={<Download />}/>
                                    <RaisedButton label="Подобрать вакансии" className="item-shadow"
                                                  overlayStyle={{color: "#fff"}} labelColor="#fff"
                                                  backgroundColor="#3e648d" icon={<Work/>}/>
                                </div>
                                <div className="row item-shadow  table-container">
                                    <Table fixedHeader={true} selectable={true}>
                                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                            <TableRow>
                                                <TableHeaderColumn colSpan="4" tooltip="Super Header"
                                                                   style={{textAlign: 'center'}}>
                                                    Подобранные вакансии
                                                </TableHeaderColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableHeaderColumn className='text-center'>Вакансия</TableHeaderColumn>
                                                <TableHeaderColumn className='text-center'>З/П</TableHeaderColumn>
                                                <TableHeaderColumn className='text-center'>Сатус</TableHeaderColumn>
                                                <TableHeaderColumn className='text-center'><Delete/></TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody showRowHover={true} stripedRows={false} displayRowCheckbox={false}
                                                   deselectOnClickaway={true}>
                                            <TableRow >
                                                <TableRowColumn className='text-center'>web developer</TableRowColumn>
                                                <TableRowColumn className='text-center'>500 USD</TableRowColumn>
                                                <TableRowColumn className='text-center'>Отказался</TableRowColumn>
                                                <TableRowColumn className='text-center'><Delete/></TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container history-container item-shadow table-container">
                            <Table fixedHeader={true} selectable={true}>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn colSpan="6" tooltip="Super Header"
                                                           style={{textAlign: 'center'}}>
                                            Последние действия на сайте
                                        </TableHeaderColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeaderColumn className='text-center'>Ответственный</TableHeaderColumn>
                                        <TableHeaderColumn className='text-center'>Действие</TableHeaderColumn>
                                        <TableHeaderColumn className='text-center'>Вакансия</TableHeaderColumn>
                                        <TableHeaderColumn className='text-center'>Старый статус</TableHeaderColumn>
                                        <TableHeaderColumn className='text-center'>Новый статус</TableHeaderColumn>
                                        <TableHeaderColumn className='text-center'>Дата</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody showRowHover={true} stripedRows={false} displayRowCheckbox={false}
                                           deselectOnClickaway={true}>
                                    <TableRow >
                                        <TableRowColumn className='text-center'>Илларион Пряничкин</TableRowColumn>
                                        <TableRowColumn className='text-center'>Изменил</TableRowColumn>
                                        <TableRowColumn className='text-center'>Web Developer</TableRowColumn>
                                        <TableRowColumn className='text-center'>Отказался</TableRowColumn>
                                        <TableRowColumn className='text-center'>Утвержден</TableRowColumn>
                                        <TableRowColumn className='text-center'>17.12.2016</TableRowColumn>
                                    </TableRow>
                                    <TableRow >
                                        <TableRowColumn>Аккакий Зябликоа</TableRowColumn>
                                        <TableRowColumn>Добавил</TableRowColumn>
                                        <TableRowColumn>iOS Developer</TableRowColumn>
                                        <TableRowColumn>Отказался</TableRowColumn>
                                        <TableRowColumn>Отказался</TableRowColumn>
                                        <TableRowColumn>16.12.2016</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            )
        }
    }
});

module.exports = UserSingle;