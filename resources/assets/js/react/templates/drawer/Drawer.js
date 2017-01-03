/**
 * Created by kasich_n on 26.12.16.
 */


<Drawer
    open={this.state.open} containerClassName="drawer" docked={false}
    onRequestChange={(open) => this.setState({open})}
    width={336}
    containerStyle={{top: '99px'}}>
    <List>
        <ListItem primaryText="Login" leftIcon={<LogIn color={'#fff'}/>}
                  onTouchTap={this.handleClick.bind(null, '/login')}
                  style={itemStyle}/>
        <ListItem primaryText="Register" leftIcon={<Register color={'#fff'}/>}
                  onTouchTap={this.handleClick.bind(null, '/register')}
                  style={itemStyle}/>
        <Divider />
        <ListItem primaryText="Organizer" leftIcon={<Organizer color={'#fff'}/>}
                  onTouchTap={this.handleClick.bind(null, '/organizer')}
                  style={itemStyle}/>
        <ListItem primaryText="Calendar" leftIcon={<Calendar color={'#fff'}/>}
                  onTouchTap={this.handleClick.bind(null, '/calendar')}
                  style={itemStyle}/>
        <Divider />
        <ListItem
            primaryText="Users"
            leftIcon={<People color={'#fff'}/>}
            primaryTogglesNestedList={true}
            style={itemStyle}
            nestedItems={[
                <ListItem
                    key={1}
                    primaryText="Create user manually"
                    onTouchTap={this.handleClick.bind(null, '/user/create')}
                    leftIcon={<Create color={'#fff'}/>}
                    style={itemStyle}
                />,
                <ListItem
                    key={2}
                    primaryText="Upload resume from file"
                    onTouchTap={this.handleClick.bind(null, '/user/upLoad')}
                    leftIcon={<Upload color={'#fff'}/>}
                    style={itemStyle}
                />,
                <ListItem
                    key={3}
                    primaryText="All users"
                    onTouchTap={this.handleClick.bind(null, '/users')}
                    leftIcon={<ViewList color={'#fff'}/>}
                    style={itemStyle}
                />
            ]}
        />
        <ListItem
            primaryText="Vacancies"
            leftIcon={<Vacancy color={'#fff'}/>}
            primaryTogglesNestedList={true}
            style={itemStyle}
            nestedItems={[
                <ListItem
                    key={1}
                    primaryText="Create new vacancy"
                    onTouchTap={this.handleClick.bind(null, '/vacancy/create')}
                    leftIcon={<Create color={'#fff'}/>}
                    style={itemStyle}
                />,
                <ListItem
                    key={2}
                    primaryText="All vacancies"
                    onTouchTap={this.handleClick.bind(null, '/vacancies')}
                    leftIcon={<ViewList color={'#fff'}/>}
                    style={itemStyle}
                />
            ]}
        />
        <ListItem
            primaryText="Companies"
            leftIcon={<Company color={'#fff'}/>}
            primaryTogglesNestedList={true}
            style={itemStyle}
            nestedItems={[
                <ListItem
                    key={1}
                    primaryText="Create new company"
                    onTouchTap={this.handleClick.bind(null, '/company/create')}
                    leftIcon={<Create color={'#fff'}/>}
                    style={itemStyle}
                />,
                <ListItem
                    key={2}
                    primaryText="All companies"
                    onTouchTap={this.handleClick.bind(null, '/companies')}
                    leftIcon={<ViewList color={'#fff'}/>}
                    style={itemStyle}
                />
            ]}
        />
        <Divider />
        <ListItem primaryText="Dictionary" leftIcon={<Book color={'#fff'}/>}
                  onTouchTap={this.handleClick.bind(null, '/dictionary')}
                  style={itemStyle}/>
    </List>
</Drawer>