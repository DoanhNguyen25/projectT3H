import React, { Component } from 'react';
import './App.css'
class Modal extends Component {
    render() {
        const showHideClassName = this.props.show ? "modal display_block" : "modal display_none"
        return (
            <div className={showHideClassName}>
                <div className="modal_content">
                    <div class="modal-header">
                        <span class="closeBtn" onClick={this.props.closeBtn}>&times;</span>
                        <h2>hello xin chào tất cả bạn</h2>
                    </div>
                    <div class="modal-body">
                        <p>modal body</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div class="modal-footer">Modal footer</div>
                </div>

            </div>
        );
    }
}

export default Modal;