SELECT DISTINCT c.nome, c.email
FROM clientes c
JOIN pedidos p ON c.cliente_id = p.cliente_id
WHERE p.data_pedido >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)