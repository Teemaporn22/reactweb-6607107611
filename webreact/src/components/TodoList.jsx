import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'จ : เรียนภาษาอังกฤษตอนเย็น', completed: true },
        { id: 2, text: 'อ : ทำความเข้าใจ Components', completed: true },
        { id: 3, text: 'พ : ยกคลาสทั้งวัน', completed: true },
        { id: 4, text: 'พฤ : assignment FE', completed: true },
        { id: 5, text: 'ศ : Mock exam DBA', completed: true },
        { id: 6, text: 'ส : ไปราชบุรี', completed: false },
        { id: 7, text: 'อา : เตรียมสอบ DBA', completed: false }
    ];
    
        // ฟังก์ชันสลับสถานะ completed
    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>1 week : 25-30 Aug 2025</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#ccbeb0ff',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#264025',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)} //click
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#82896E' : '#AD6B4B',
                            transition: 'all 0.3s ease'
                            //cursor: 'pointer' //can click
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#3e3d3dff' : '#ffffffff'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #cca896ff, #AD6B4B)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                เหลืออีกแค่ {completedCount} วันเท่านั้น สู้ๆๆ
            </div>
        </div>
    );
};

export default TodoList;