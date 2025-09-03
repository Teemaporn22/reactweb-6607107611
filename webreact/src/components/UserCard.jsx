import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://static.wikia.nocookie.net/ppgfanon/images/2/2b/Buttercup_PPG_%281%29.png/revision/latest?cb=20240221024754" 
        alt="User Avatar"
        style={{
            borderRadius: '60%',
            width: '80',
            height: '80',
            border: '2px solid #ddd'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#a99988ff', margin: '10px 0' }}>
        Teemaporn Ruaengsri
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        Silpakorn University 
        <p>IT major Year3</p>
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;