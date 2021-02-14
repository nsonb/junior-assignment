// customised interface for use with typescript checking and data fetching from the server

export interface datum {
    chats_from_autosuggest_count: number,
    chats_from_user_count: number,
    chats_from_visitor_count: number,
    conversation_count: number,
    date: Date,
    missed_chat_count: number,
    user_message_count: number,
    visitor_message_count: number,
    visitors_affected_by_chat_count: number,
    visitors_autosuggested_count: number,
    visitors_with_chat_count: number,
    visitors_with_conversation_count: number,
}

export interface dataRes {
    by_date : datum[],
    end_date: Date,
    room_id: string,
    start_date: Date,
    total_chats_from_autosuggest_count: number,
    total_chats_from_user_count: number,
    total_chats_from_visitor_count: number,
    total_conversation_count: number,
    total_missed_chat_count: number,
    total_user_message_count: number,
    total_visitor_message_count: number,
    total_visitors_affected_by_chat_count: number,
    total_visitors_autosuggested_count: number,
    total_visitors_with_chat_count: number,
    total_visitors_with_conversation_count: number
}

export interface datapoint {
    x: string|number,
    y: string|number
}

