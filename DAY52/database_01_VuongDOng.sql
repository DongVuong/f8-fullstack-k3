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
-- Name: courses; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying NOT NULL,
    price text,
    content text NOT NULL,
    teacher_id integer NOT NULL,
    active integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    description text
);


ALTER TABLE public.courses OWNER TO dongvuong;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: dongvuong
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying NOT NULL,
    bio text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.teachers OWNER TO dongvuong;

--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: dongvuong
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.courses (id, name, price, content, teacher_id, active, created_at, updated_at, description) FROM stdin;
1	khoa hoc 1 new	100	chi tiet 1	1	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
2	khoa hoc 2 new	200	chi tiet 2	1	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
3	khoa hoc 3 new	300	chi tiet 3	1	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
4	khoa hoc 4 new	400	chi tiet 4	2	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
5	khoa hoc 5 new	500	chi tiet 5	2	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
6	khoa hoc 6 new	600	chi tiet 6	2	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
7	khoa hoc 7 new	700	chi tiet 7	3	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
8	khoa hoc 8 new	800	chi tiet 8	3	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
9	khoa hoc 9 new	900	chi tiet 9	3	1	2024-01-04 13:52:08.214171	2024-01-04 14:05:17.868552	\N
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: dongvuong
--

COPY public.teachers (id, name, bio, created_at, updated_at) FROM stdin;
1	Giang vien 1	bio 1	2024-01-04 13:45:52.747935	2024-01-04 14:09:52.114253
2	Giang vien 2	bio 2	2024-01-04 13:45:52.747935	2024-01-04 14:09:52.114253
3	Giang vien 3	bio 3	2024-01-04 13:45:52.747935	2024-01-04 14:09:52.114253
\.


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.courses_id_seq', 9, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dongvuong
--

SELECT pg_catalog.setval('public.teachers_id_seq', 3, true);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- Name: courses courses_teacher_foreign; Type: FK CONSTRAINT; Schema: public; Owner: dongvuong
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_teacher_foreign FOREIGN KEY (teacher_id) REFERENCES public.teachers(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

