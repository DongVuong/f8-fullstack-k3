--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Homebrew)
-- Dumped by pg_dump version 14.10 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: billing; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.billing (
    id integer NOT NULL,
    billing_name character varying,
    billing_email character varying,
    telephone character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.billing OWNER TO dongvuong;

--
-- Name: billing_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.billing ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.billing_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: customers; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying(50),
    email character varying(100),
    password character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.customers OWNER TO dongvuong;

--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.customers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: order_detail; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.order_detail (
    id integer NOT NULL,
    order_id integer,
    product_name character varying(255),
    product_price integer,
    product_id integer,
    quantity integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.order_detail OWNER TO dongvuong;

--
-- Name: order_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.order_detail ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: orders; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    total integer,
    status character varying(255),
    billing_id integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.orders OWNER TO dongvuong;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.orders ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255),
    price integer,
    description character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.products OWNER TO dongvuong;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: billing; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.billing (id, billing_name, billing_email, telephone, created_at, updated_at) FROM stdin;
1	khach hang 1	customer1@gmail.com	0123456789	2024-01-08 12:06:47.097051	2024-01-08 12:06:47.097051
2	khach hang 2	customer2@gmail.com	0987654321	2024-01-08 12:06:47.097051	2024-01-08 12:06:47.097051
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.customers (id, name, email, password, created_at, updated_at) FROM stdin;
2	khach hang 2	customer2@gmail.com	password2	2024-01-08 11:57:10.386306	2024-01-08 11:57:10.386306
1	khach hang 1	customer1@gmail.com	password1	2024-01-08 11:57:10.386306	2024-01-08 11:57:10.386306
3	khach hang 3	customer3@gmail.com	password3	2024-01-08 11:57:10.386306	2024-01-08 11:57:10.386306
\.


--
-- Data for Name: order_detail; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.order_detail (id, order_id, product_name, product_price, product_id, quantity, created_at, updated_at) FROM stdin;
1	1	san pham 1	1000	1	10	2024-01-08 12:17:27.608357	2024-01-08 12:17:27.608357
2	2	san pham 2	2000	2	10	2024-01-08 12:17:27.608357	2024-01-08 12:17:27.608357
3	3	san pham 2	2000	2	10	2024-01-08 12:17:27.608357	2024-01-08 12:17:27.608357
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.orders (id, total, status, billing_id, created_at, updated_at) FROM stdin;
1	10000	dang van chuyen	1	2024-01-08 12:09:53.606792	2024-01-08 12:09:53.606792
2	20000	da giao hang	2	2024-01-08 12:09:53.606792	2024-01-08 12:09:53.606792
3	20000	da giao hang	1	2024-01-08 12:10:52.065962	2024-01-08 12:10:52.065962
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.products (id, name, price, description, created_at, updated_at) FROM stdin;
3	san pham 3	3000	description 3	2024-01-08 11:55:37.547747	2024-01-08 11:55:37.547747
1	san pham 1	1000	description 1	2024-01-08 11:55:37.547747	2024-01-08 11:55:37.547747
2	san pham 2	2000	description 2	2024-01-08 11:55:37.547747	2024-01-08 11:55:37.547747
4	san pham 4	4000	description 4	2024-01-08 11:55:37.547747	2024-01-08 11:55:37.547747
5	san pham 5	5000	description 5	2024-01-08 11:55:37.547747	2024-01-08 11:55:37.547747
\.


--
-- Name: billing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.billing_id_seq', 2, true);


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.customers_id_seq', 3, true);


--
-- Name: order_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.order_detail_id_seq', 3, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.orders_id_seq', 3, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.products_id_seq', 5, true);


--
-- Name: billing billing_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.billing
    ADD CONSTRAINT billing_pkey PRIMARY KEY (id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: order_detail order_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: orders billing_id_foregin; Type: FK CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT billing_id_foregin FOREIGN KEY (billing_id) REFERENCES public.billing(id) NOT VALID;


--
-- Name: order_detail oder_id_foregin; Type: FK CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT oder_id_foregin FOREIGN KEY (order_id) REFERENCES public.orders(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

