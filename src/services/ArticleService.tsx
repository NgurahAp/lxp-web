// src/services/articleService.ts
import axios from "axios";
import { Article, ArticleResponse } from "../types/article";
import { ArticleData, ArticleListResponse } from "../types/tagArticle";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchArticle = async (slug: string): Promise<Article> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get<ArticleResponse>(
    `${API_BASE_URL}/api/v1/article/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useArticle = (slug: string): UseQueryResult<Article, Error> => {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => {
      if (!slug) throw new Error("ID is required");
      return fetchArticle(slug).catch((error) => {
        throw new Error(`Error fetching artikel data: ${error.message}`);
      });
    },
    enabled: !!slug,
  });
};

const fetchArticleData = async (
  articleId: string,
  limit = 10
): Promise<ArticleData[]> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get<ArticleListResponse>(
    `${API_BASE_URL}/api/v1/article/related/${articleId}?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useArticleData = (
  id: string
): UseQueryResult<ArticleData[], Error> => {
  return useQuery({
    queryKey: ["relatedArticles", id],
    queryFn: () => {
      if (!id) throw new Error("ID is required");
      return fetchArticleData(id);
    },
    enabled: !!id,
  });
};
