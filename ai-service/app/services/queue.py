import pika
import json
import time

def process_ai_task(ch, method, properties, body):
    data = json.loads(body)
    prompt = data.get("prompt", "")
    
    print(f"[AI Service] Processing: {prompt}")
    
    # Mock AI Processing Delay
    time.sleep(2)
    
    result = {
        "job_id": data.get("job_id"),
        "result": "2x * sin(x) + x^2 * cos(x)",
        "steps": [
            "Parsing NLP into AST...",
            "Applying derivative rules."
        ],
        "status": "COMPLETED"
    }
    
    # Publish back to the results queue
    ch.basic_publish(
        exchange='',
        routing_key='calc_results',
        body=json.dumps(result)
    )
    print(f"[AI Service] Completed job {data.get('job_id')}")
    ch.basic_ack(delivery_tag=method.delivery_tag)

def start_consumer():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    
    channel.queue_declare(queue='ai_tasks')
    channel.queue_declare(queue='calc_results')

    channel.basic_qos(prefetch_count=1)
    channel.basic_consume(queue='ai_tasks', on_message_callback=process_ai_task)

    print('[AI Service] Waiting for NLP messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    start_consumer()
