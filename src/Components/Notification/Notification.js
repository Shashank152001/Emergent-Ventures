import './Notification.css';

export const Notification = ({ messages, closeNotification }) => {
	return (
		<div className='notification-messages-div'>
			<div className='notification-messages-heading'>
				<span>Notifications</span>
				<i class='bi bi-x text-danger cross-icon' onClick={closeNotification}></i>
			</div>
			<div className='notification-messages'>
				{messages === undefined ? (
					<div className='no-notification-div'>
						<i class='bi bi-database-exclamation no-notification-icon'></i>
						<span>No notifications available</span>
					</div>
				) : (
					messages.map((message) => {
						return message?.status === 'unread' ? (
							<div className='notification-message-card unread-card' key={message.id}>
								<span className='notification-logo-span'>
									<i class='bi bi-patch-exclamation text-primary notification-logo-icon'></i>
								</span>
								<div className='notification-content-div unread-bold'>
									<span>{message.content}</span>
									<span className='unread-bold'>
										{new Date(message.date.substr(0,23)).toLocaleString(undefined, {
											day: 'numeric',
											month: 'short',
											year: 'numeric',
											hour: '2-digit',
											minute: '2-digit'
										})}
									</span>
								</div>
							</div>
						) : (
							<div className='notification-message-card' key={message.id}>
								<span className='notification-logo-span'>
									<i class='bi bi-patch-exclamation text-primary notification-logo-icon'></i>
								</span>
								<div className='notification-content-div'>
									<span>{message.content}</span>
									<span className='notification-message-date'>
										{new Date(message.date).toLocaleString(undefined, {
											day: 'numeric',
											month: 'short',
											year: 'numeric',
											hour: '2-digit',
											minute: '2-digit'
										})}
									</span>
								</div>
							</div>
						);
					})
				)}
			</div>
			<div className='notification-messages-footer'>
				<button className='all-read-btn'>
					<span className='check-icon'>
						<i class='bi bi-check2-square'></i>
					</span>
					<span>Mark All As Read</span>
				</button>
			</div>
		</div>
	);
};
