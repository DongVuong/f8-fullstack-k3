--Danh sach don hang
SELECT billing.id,billing.billing_name,billing.billing_email, billing.telephone,order_detail.quantity, orders.total,orders.status, orders.created_at
FROM billing
JOIN orders ON billing.id = orders.billing_id
JOIN order_detail ON order_detail.order_id = orders.id

--Chi tiet don hang
SELECT billing.id,billing.billing_name,billing.billing_email, billing.telephone,order_detail.product_name, order_detail.product_id, order_detail.product_price, order_detail.quantity, orders.total, orders.status, orders.created_at,orders.updated_at
FROM billing
JOIN orders ON billing.id = orders.billing_id
JOIN order_detail ON order_detail.order_id = orders.id
