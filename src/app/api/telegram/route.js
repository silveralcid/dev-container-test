export async function POST(req) {
    const body = await req.json(); // Parse the incoming request body

    if (body.message && body.message.text === '/start') {
        const chatId = body.message.chat.id;
        const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

        // Send a message to the user
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: 'Welcome to the mini app!',
            }),
        });

        if (response.ok) {
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ success: false, error: 'Failed to send message' }), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify({ success: false, error: 'No /start command received' }), { status: 200 });
    }
}
