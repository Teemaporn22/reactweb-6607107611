import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#7B4B36',
                marginBottom: '40px'
            }}>
                My Portfolio
            </h1>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '2px solid #a99988ff',
                borderRadius: '8px',
                backgroundColor: '#DDCBB7'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Welcome to my Portfolio
                </h2>
                <Welcome />
                <Greeting />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '2px solid #a99988ff',
                borderRadius: '8px',
                backgroundColor: '#DDCBB7'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    My to do list
                </h2>
                <TodoList />
            </section>

            
            
            {/* <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Component with Logic
                </h2>
                <Clock />
            </section> */}
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '2px solid #a99988ff',
                borderRadius: '8px',
                backgroundColor: '#ccbeb0ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    My Profile
                </h2>
                <UserCard />
            </section>
            
            
        </div>
    );
}

export default ComponentExamples;